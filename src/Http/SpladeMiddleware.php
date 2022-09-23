<?php

namespace ProtoneMedia\Splade\Http;

use Closure;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as LaravelResponse;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use ProtoneMedia\Splade\SpladeCore;
use ProtoneMedia\Splade\Ssr;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SpladeMiddleware
{
    const FLASH_TOASTS = 'splade.flashToasts';

    public function __construct(private SpladeCore $splade, private Ssr $ssr)
    {
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
        $this->splade->setModalKey(Str::uuid());
        $this->splade->resetLazyComponentCounter();

        /** @var Response $response */
        $response = $next($request);

        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return $response;
        }

        $spladeData = $this->spladeData($request->session());

        if (in_array($response->getStatusCode(), [302, 303])) {
            $request->session()->put(static::FLASH_TOASTS, $this->splade->getToasts());
        }

        if ($this->splade->isSpladeRequest()) {
            if ($response instanceof JsonResponse) {
                $newData = array_merge(
                    $response->getData(true),
                    ['splade' => $spladeData]
                );

                if ($response->exception instanceof ValidationException) {
                    $newData['splade']->errors = $response->exception->errors();
                }

                return $response->setData($newData);
            }

            $content = $response->getContent() ?: '';

            [$content, $dynamics] = static::extractDynamicsFromContent($content);

            return $response->setContent(json_encode([
                'html'     => $this->splade->isModalRequest() ? $this->parseModalContent($content) : $content,
                'dynamics' => $dynamics,
                'splade'   => $spladeData,
            ]));
        }

        if ($response instanceof JsonResponse) {
            return $response;
        }

        if (!$response->isSuccessful()) {
            return $response;
        }

        $originalContent  = $response->getContent() ?: '';
        $originalViewData = [];

        if ($response instanceof LaravelResponse && $response->getOriginalContent() instanceof View) {
            $originalViewData = $response->getOriginalContent()->getData();
        }

        [$content, $dynamics] = static::extractDynamicsFromContent($originalContent);

        $viewData = [
            'components' => static::renderedComponents(),
            'html'       => $content,
            'dynamics'   => $dynamics,
            'splade'     => $spladeData,
            'ssrHead'    => null,
            'ssrBody'    => null,
        ];

        if (config('splade.ssr.enabled')) {
            $data = $this->ssr->render(
                $viewData['components'],
                $viewData['html'],
                $viewData['dynamics'],
                $viewData['splade'],
            );

            $viewData['ssrBody'] = $data['body'] ?? null;
        }

        if (!$viewData['ssrBody'] && config('splade.ssr.blade_fallback')) {
            $viewData['ssrBody'] = $originalContent;
        }

        $wrappedView = view($this->splade->getRootView(), $viewData);

        if (!$response instanceof LaravelResponse) {
            return $response->setContent($wrappedView->render());
        }

        // this will call 'render' on the wrapped view
        $response->setContent($wrappedView);

        // restore the original data (for test assertions)
        $wrappedView->with($originalViewData);

        return $response;
    }

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

    private function parseModalContent(string $content): ?string
    {
        $key = $this->splade->getModalKey();

        return Str::between(
            $content,
            "<!--START-SPLADE-MODAL-{$key}-->",
            "<!--END-SPLADE-MODAL-{$key}-->"
        );
    }

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
            'modal'  => $this->splade->isModalRequest() ? $this->splade->modalType() : null,
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

    public static function renderedComponents(): string
    {
        return Blade::render('<x-splade-component is="confirm" /><x-splade-component is="toast-wrapper" />');
    }
}
