<?php

namespace ProtoneMedia\Splade\Http;

use Closure;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as LaravelResponse;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Str;
use Illuminate\Support\ViewErrorBag;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\SpladeCore;
use ProtoneMedia\Splade\Ssr;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SpladeMiddleware
{
    /**
     * @var callable|null
     */
    private static $afterOriginalResponseCallback = [];

    const FLASH_TOASTS = 'splade.flashToasts';

    /**
     * This Middleware is required to support Splade's SPA and other features.
     */
    public function __construct(
        private SpladeCore $splade,
        private Ssr $ssr,
    ) {
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Set and restore some defaults before handling the request.
        $this->splade->setModalKey(Str::uuid());
        $this->splade->resetDataStores();
        $this->splade->resetLazyComponentCounter();
        $this->splade->resetRehydrateComponentCounter();
        $this->splade->resetPersistentLayoutKey();

        /** @var Session */
        $session = session()->driver();

        $errorsFromRedirect = $session->pull('errors', new ViewErrorBag);

        /** @var Response $response */
        $response = $next($request);

        if (static::$afterOriginalResponseCallback) {
            $callback = static::$afterOriginalResponseCallback;
            $callback($request, $response);
        }

        $response->headers->add(['Vary' => 'X-Splade']);

        // Don't mess with file and streamed responses.
        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return $response;
        }

        // Check if the response has a Content-Disposition header with a filename.
        if ($response->headers->has('Content-Disposition') && Str::contains($response->headers->get('Content-Disposition'), 'filename=')) {
            return $response;
        }

        // This response should be ignored by Splade.
        if ($response->headers->has(SpladeCore::HEADER_SKIP_MIDDLEWARE)) {
            $response->headers->remove(SpladeCore::HEADER_SKIP_MIDDLEWARE);

            return $response;
        }

        // Gather the required meta data for the app.
        $spladeData = $this->spladeData($session, $errorsFromRedirect);

        // The response should redirect away from the Splade app.
        if ($redirect = $this->shouldRedirectsAway($response)) {
            return $redirect;
        }

        // If the response is a redirect, put the toasts into the session
        // so they won't be lost in the next request.
        if (in_array($response->getStatusCode(), [302, 303])) {
            $session->put(static::FLASH_TOASTS, $this->splade->getToasts());
        }

        // A Splade request is a request made by the Vue app, so not the initial first request.
        return $this->splade->isSpladeRequest()
            ? $this->handleSpladeRequest($request, $response, $spladeData)
            : $this->handleRegularRequest($request, $response, $spladeData);
    }

    /**
     * Terminate and Reset Splade request
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Http\Response  $response
     */
    public function terminate($request, $response)
    {
        $this->splade->reset();
    }

    /**
     * A callback that sits between the 'regular' response, and
     * the handling of the Splade response.
     *
     * @return void
     */
    public static function afterOriginalResponse(Closure $callback = null)
    {
        static::$afterOriginalResponseCallback = $callback;
    }

    /**
     * Handle a Splade request, made from the Vue app.
     *
     * @param  \Illuminate\Http\Response  $response
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    private function handleSpladeRequest(Request $request, Response $response, SpladeResponseData $spladeData): Response|JsonResponse
    {
        // We don't mess with JsonResponses, except we add the Splade data to it.
        if ($response instanceof JsonResponse) {
            // Get the Validation Errors from the exception and put them in the Splade data.
            if ($response->exception instanceof ValidationException) {
                $spladeData->errors = (object) $response->exception->errors();
            }

            $responseData = $response->getData(true);

            return $response->setData(array_merge(
                is_array($responseData) ? $responseData : [],
                ['splade' => $spladeData->toArray()]
            ));
        }

        if ($response->isRedirect() && $this->splade->dontRefreshPage()) {
            $response = response()->noContent(200);
        }

        if (!$response->isSuccessful()) {
            return $response;
        }

        // Get the rendered content...
        $content = $response->getContent() ?: '';

        // Extract the Dynamic Content, we'll return that separately so Vue can handle it.
        [$content, $dynamics] = static::extractDynamicsFromContent($content);

        // When there are Data Stores registered, wrap the content...
        $content = $this->wrapContentInDataStores($content);

        if ($this->splade->isLazyRequest()) {
            $content = static::extractComponent($content, 'lazy', $this->splade->getLazyComponentKey()) ?: $content;
        } elseif ($this->splade->isRehydrateRequest()) {
            $content = static::extractComponent($content, 'rehydrate', $this->splade->getRehydrateComponentKey());
        }

        $modelContent = $this->splade->isModalRequest()
            ? $this->parseModalContent($content)
            : null;

        if ($modelContent) {
            $content = $modelContent;
        } else {
            $spladeData->modal = null;
        }

        return $response->setContent(json_encode([
            // If this is Modal request, extract the content...
            'html'     => $content,
            'dynamics' => $dynamics,
            'splade'   => $spladeData->toArray(),
        ]));
    }

    /**
     * Grabs the component from the rendered content and returns it.
     */
    public static function extractComponent(string $content, string $component, int $componentKey): string
    {
        $component = strtoupper($component);

        preg_match_all('/START-SPLADE-' . $component . '-(\w+)-->/', $content, $matches);

        return (string) collect($matches[1] ?? [])
            ->mapWithKeys(function (string $name) use ($content, $component) {
                $rehydrate = Str::between(
                    $content,
                    "<!--START-SPLADE-{$component}-{$name}-->",
                    "<!--END-SPLADE-{$component}-{$name}-->"
                );

                return [$name => trim($rehydrate)];
            })
            ->get($componentKey);
    }

    /**
     * Handle a non-Splade request. This is probably the inital request.
     *
     * @param  \Illuminate\Http\Response  $response
     * @return \Illuminate\Http\Response
     */
    private function handleRegularRequest(Request $request, Response $response, SpladeResponseData $spladeData): Response
    {
        // No Splade request, but a regular JsonResponse that was
        // requested, for example, from the Defer component...
        if ($response instanceof JsonResponse) {
            return $response;
        }

        if (!$response->isSuccessful()) {
            return $response;
        }

        $originalContent  = $response->getContent() ?: '';
        $originalViewData = [];

        // Save the original view data, as we're going to wrap the response
        // in the Splade root template. Later on, we set this data on the
        // root template. This way you can still make test assertions.
        if ($response instanceof LaravelResponse && $response->getOriginalContent() instanceof View) {
            $originalViewData = $response->getOriginalContent()->getData();
        }

        // Extract the Dynamic Content, we'll return that separately so Vue can handle it.
        [$content, $dynamics] = static::extractDynamicsFromContent($originalContent);

        // When there are Data Stores registered, wrap the content...
        $content = $this->wrapContentInDataStores($content);

        $viewData = [
            'components' => static::renderedComponents(),
            'html'       => $content,
            'dynamics'   => $dynamics,
            'splade'     => $spladeData->toArray(),
            'ssrHead'    => null,
            'ssrBody'    => null,
        ];

        // Make a SSR request when it's enabled.
        if (config('splade.ssr.enabled')) {
            $data = $this->ssr->render(
                $viewData['components'],
                $viewData['html'],
                $viewData['dynamics'],
                $spladeData,
            );

            $viewData['ssrBody'] = $data['body'] ?? null;
        }

        // If SSR is disabled, or the request failed, and the fallback is
        // enabled, instead of the SSR content, we use the original
        // content so search engines don't index an empty page.
        if (!$viewData['ssrBody'] && config('splade.ssr.blade_fallback')) {
            $viewData['ssrBody'] = $originalContent;
        }

        // Create a View instance of the root view with the data.
        $wrappedView = view($this->splade->getRootView(), $viewData);

        // If the response isn't a Laravel response, we just render the root
        // template and return the response with the rendered content.
        if (!$response instanceof LaravelResponse) {
            return $response->setContent($wrappedView->render());
        }

        // Otherwise, we'll let the 'setContent' method call
        // the 'render' method on the wrapped view, then we
        // can restore the original data in the next step.
        $response->setContent($wrappedView);

        // Restore the original data.
        $wrappedView->with($originalViewData);

        return $response;
    }

    /**
     * When there are Data Stores registered, wrap the content in a Data Store component.
     */
    public function wrapContentInDataStores(string $content): string
    {
        $dataStores = $this->splade->getDataStores();

        $keys = implode(',', array_keys($dataStores));

        $content = str_replace('##SPLADE-PASSTHROUGH-NEW##', $keys, $content);
        $content = str_replace('##SPLADE-PASSTHROUGH-APPEND##', $keys ? ",{$keys}" : '', $content);

        if (empty($dataStores)) {
            return $content;
        }

        return Blade::render(implode('', [
            '<div>',    // We have to start with a div, otherwise the applied backdrop styling in SpladeApp.vue won't work.
            '<x-splade-component is="data-stores" :stores="$stores">',
            '{!! $originalContent !!}',
            '</x-splade-component>',
            '</div>',
        ]), [
            'stores'          => $dataStores,
            'originalContent' => $content,
        ]);
    }

    /**
     * Extracts all Dynamic Content, i.e. content that changes in a persistent
     * layout, and replaces it with a placeholder. It returns the
     * content, and the extracted Dynamic Content as an array.
     */
    public static function extractDynamicsFromContent(string $content): array
    {
        preg_match_all('/START-SPLADE-DYNAMIC-(\w+)-->/', $content, $matches);

        $dynamics = collect($matches[1] ?? [])
            ->mapWithKeys(function (string $name) use ($content) {
                $dynamic = Str::between(
                    $content,
                    "<!--START-SPLADE-DYNAMIC-{$name}-->",
                    "<!--END-SPLADE-DYNAMIC-{$name}-->"
                );

                return [$name => trim($dynamic)];
            })
            ->each(function (string $dynamicContent, string $name) use (&$content) {
                $rendered = Blade::render(
                    '<x-splade-component is="dynamic-html" :name="$name" />',
                    ['name' => $name]
                );

                $content = str_replace(
                    "<!--START-SPLADE-DYNAMIC-{$name}-->" . $dynamicContent . "<!--END-SPLADE-DYNAMIC-{$name}-->",
                    $rendered,
                    $content
                );
            });

        return [$content, $dynamics->all()];
    }

    /**
     * Finds a Splade Modal in the content and returns it.
     */
    private function parseModalContent(string $content): ?string
    {
        $key = $this->splade->getModalKey();

        if (!Str::contains($content, "<!--START-SPLADE-MODAL-{$key}-->")) {
            return null;
        }

        return Str::between(
            $content,
            "<!--START-SPLADE-MODAL-{$key}-->",
            "<!--END-SPLADE-MODAL-{$key}-->"
        );
    }

    /**
     * Returns all error messages from the session.
     */
    private function allErrorMessages(ViewErrorBag $viewErrorBag): array
    {
        return collect($viewErrorBag->getBags())
            ->flatMap->getMessages()
            ->toArray();
    }

    /**
     * Merges all bags from all view errors bags into one.
     *
     * @param  \Illuminate\Support\ViewErrorBag[]  ...$viewErrorsBags
     */
    private function mergeViewErrorBags(...$viewErrorsBags): ViewErrorBag
    {
        $mergedViewBag = new ViewErrorBag;

        collect($viewErrorsBags)->each(function (ViewErrorBag $viewErrorBag) use ($mergedViewBag) {
            collect($viewErrorBag->getBags())->each(function (MessageBag $bag, string $key) use ($mergedViewBag) {
                $mergedBag = $mergedViewBag->hasBag($key)
                    ? $mergedViewBag->getBag($key)
                    : tap(new MessageBag, fn ($bag) => $mergedViewBag->put($key, $bag));

                $mergedBag->merge($bag);
            });
        });

        return $mergedViewBag;
    }

    /**
     * This methods returns all relevant data for a Splade page view.
     */
    private function spladeData(Session $session, ViewErrorBag $errorsFromRedirect): SpladeResponseData
    {
        $flashData = config('splade.share_session_flash_data')
            ? collect($session->get('_flash.old', []))
            : [];

        $flash = collect($flashData)
            ->mapWithKeys(fn ($key) => [$key => $session->get($key)])
            ->toArray();

        $excludeHead = $this->splade->isLazyRequest() || $this->splade->isRehydrateRequest();

        $mergedViewErrorBag = $this->mergeViewErrorBags(
            $session->get('errors', new ViewErrorBag),
            $errorsFromRedirect
        );

        return new SpladeResponseData(
            head: $excludeHead ? [] : $this->splade->head()->toArray(),
            modal: $this->splade->isModalRequest() ? $this->splade->getModalType() : null,
            modalTarget: $this->splade->getModalTarget() ?: null,
            flash: (object) $flash,
            errors: (object) $this->allErrorMessages($mergedViewErrorBag),
            shared: (object) Arr::map($this->splade->getShared(), fn ($value) => value($value)),
            toasts: array_merge(
                $session->pull(static::FLASH_TOASTS, []),
                $this->splade->getToasts(),
            ),
            preventRefresh: $this->splade->dontRefreshPage(),
            preserveScroll: $this->splade->preserveScroll(),
            lazy: $this->splade->isLazyRequest(),
            rehydrate: $this->splade->isRehydrateRequest(),
            persistentLayout:  $this->splade->getPersistentLayoutKey(),
        );
    }

    /**
     * Returns a boolean whether the Target URL is outside of the app.
     *
     * @param  \Symfony\Component\HttpFoundation\Response  $redirect
     * @return bool
     */
    private function shouldRedirectsAway(Response $response): bool|Response
    {
        if ($response->headers->has(SpladeCore::HEADER_REDIRECT_AWAY)) {
            // This is already a redirect to an outside target.
            return $response;
        }

        if (!$response instanceof RedirectResponse) {
            // No redirect at all.
            return false;
        }

        $targetUrl = $response->getTargetUrl();

        if (Str::startsWith($targetUrl, '/')) {
            // Relative URL.
            return false;
        }

        /** @var UrlGenerator $urlGenerator */
        $urlGenerator = app('url');

        $appUrl = $urlGenerator->format(
            $urlGenerator->formatRoot($urlGenerator->formatScheme()) ?: config('app.url'),
            '/'
        );

        if ($this->urlToHostAndPort($appUrl) === $this->urlToHostAndPort($targetUrl)) {
            // A redirect inside the app.
            return false;
        }

        return Splade::redirectAway($targetUrl);
    }

    /**
     * Maps a full URL to a host:port formatted string.
     */
    public static function urlToHostAndPort(string $url): string
    {
        if (!parse_url($url, PHP_URL_HOST)) {
            $url = "http://{$url}";
        }

        $parsed = parse_url($url);

        $host = $parsed['host'] ?? 'host';
        $port = $parsed['port'] ?? null;

        if (!$port) {
            $port = $parsed['scheme'] === 'http' ? 80 : 443;
        }

        return "{$host}:{$port}";
    }

    /**
     * Renders the Confirm and ToastWrapper components.
     */
    public static function renderedComponents(): string
    {
        return Blade::render('<x-splade-component is="confirm" /><x-splade-component is="toast-wrapper" />');
    }
}
