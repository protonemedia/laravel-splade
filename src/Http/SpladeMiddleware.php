<?php

namespace ProtoneMedia\Splade\Http;

use Closure;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as LaravelResponse;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
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
    const FLASH_TOASTS = 'splade.flashToasts';

    /**
     * This Middleware is required to support Splade's SPA and other features.
     *
     * @param  \ProtoneMedia\Splade\SpladeCore  $splade
     * @param  \ProtoneMedia\Splade\Ssr  $ssr
     */
    public function __construct(
        private SpladeCore $splade,
        private Ssr $ssr,
    ) {
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Set and restore some defaults before handling the request.
        $this->splade->setModalKey(Str::uuid());
        $this->splade->resetLazyComponentCounter();

        /** @var Response $response */
        $response = $next($request);

        // Don't mess with file and streamed responses.
        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return $response;
        }

        // This response should be ignored by Splade.
        if ($response->headers->has(SpladeCore::HEADER_SKIP_MIDDLEWARE)) {
            $response->headers->remove(SpladeCore::HEADER_SKIP_MIDDLEWARE);

            return $response;
        }

        // Gather the required meta data for the app.
        $spladeData = $this->spladeData($request->session());

        // The response should redirect away from the Splade app.
        if ($redirect = $this->shouldRedirectsAway($response)) {
            return $redirect;
        }

        // If the response is a redirect, put the toasts into the session
        // so they won't be lost in the next request.
        if (in_array($response->getStatusCode(), [302, 303])) {
            $request->session()->put(static::FLASH_TOASTS, $this->splade->getToasts());
        }

        // A Splade request is a request made by the Vue app, so not the initial first request.
        return $this->splade->isSpladeRequest()
            ? $this->handleSpladeRequest($request, $response, $spladeData)
            : $this->handleRegularRequest($request, $response, $spladeData);
    }

    /**
     * Handle a Splade request, made from the Vue app.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Http\Response  $response
     * @param  object  $spladeData
     * @return \Illuminate\Http\Response
     */
    private function handleSpladeRequest(Request $request, Response $response, object $spladeData): Response
    {
        // We don't mess with JsonResponses, except we add the Splade data to it.
        if ($response instanceof JsonResponse) {
            $newData = array_merge(
                $response->getData(true),
                ['splade' => $spladeData]
            );

            // Get the Validation Errors from the exception and put them in the Splade data.
            if ($response->exception instanceof ValidationException) {
                $newData['splade']->errors = $response->exception->errors();
            }

            return $response->setData($newData);
        }

        if (!$response->isSuccessful()) {
            return $response;
        }

        // Get the rendered content...
        $content = $response->getContent() ?: '';

        // Extract the Dynamic Content, we'll return that separately so Vue can handle it.
        [$content, $dynamics] = static::extractDynamicsFromContent($content);

        return $response->setContent(json_encode([
            // If this is Modal request, extract the content...
            'html'     => $this->splade->isModalRequest() ? $this->parseModalContent($content) : $content,
            'dynamics' => $dynamics,
            'splade'   => $spladeData,
        ]));
    }

    /**
     * Handle a non-Splade request. This is probably the inital request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Http\Response  $response
     * @param  object  $spladeData
     * @return \Illuminate\Http\Response
     */
    private function handleRegularRequest(Request $request, Response $response, object $spladeData): Response
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

        $viewData = [
            'components' => static::renderedComponents(),
            'html'       => $content,
            'dynamics'   => $dynamics,
            'splade'     => $spladeData,
            'ssrHead'    => null,
            'ssrBody'    => null,
        ];

        // Make a SSR request when it's enabled.
        if (config('splade.ssr.enabled')) {
            $data = $this->ssr->render(
                $viewData['components'],
                $viewData['html'],
                $viewData['dynamics'],
                $viewData['splade'],
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
     * Extracts all Dynamic Content, i.e. content that changes in a persistent
     * layout, and replaces it with a placeholder. It returns the
     * content, and the extracted Dynamic Content as an array.
     *
     * @param  string  $content
     * @return array
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
                $content = str_replace(
                    "<!--START-SPLADE-DYNAMIC-{$name}-->" . $dynamicContent . "<!--END-SPLADE-DYNAMIC-{$name}-->",
                    '<SpladeDynamicHtml :keep-alive-key="`dynamicVisit.${$splade.pageVisitId.value}.${$splade.dynamicVisitId.value}`" :name="\'' . $name . '\'" />',
                    $content
                );
            });

        return [$content, $dynamics->all()];
    }

    /**
     * Finds a Splade Modal in the content and returns it.
     *
     * @param  string  $content
     * @return string|null
     */
    private function parseModalContent(string $content): ?string
    {
        $key = $this->splade->getModalKey();

        return Str::between(
            $content,
            "<!--START-SPLADE-MODAL-{$key}-->",
            "<!--END-SPLADE-MODAL-{$key}-->"
        );
    }

    /**
     * This methods returns all relevant data for a Splade page view.
     *
     * @param  \Illuminate\Contracts\Session\Session  $session
     * @return object
     */
    private function spladeData(Session $session): object
    {
        $flashData = config('splade.share_session_flash_data')
            ? collect($session->get('_flash.old', []))
            : [];

        $flash = collect($flashData)
            ->mapWithKeys(fn ($key) => [$key => $session->get($key)])
            ->toArray();

        return (object) [
            'head'   => $this->splade->head()->toArray(),
            'modal'  => $this->splade->isModalRequest() ? $this->splade->getModalType() : null,
            'flash'  => (object) $flash,
            'errors' => (object) session('errors')?->toArray(),
            'shared' => (object) $this->splade->getShared(),
            'toasts' => array_merge(
                $session->pull(static::FLASH_TOASTS, []),
                $this->splade->getToasts(),
            ),
            'preventRefresh' => $this->splade->dontRefreshPage(),
            'lazy'           => $this->splade->isLazyRequest(),
        ];
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
     *
     * @param  string  $url
     * @return string
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
     *
     * @return string
     */
    public static function renderedComponents(): string
    {
        return Blade::render('<x-splade-component is="confirm" /><x-splade-component is="toast-wrapper" />');
    }
}
