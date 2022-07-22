<?php

namespace ProtoneMedia\Splade\Http;

use Closure;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\SpladeCore;
use Symfony\Component\HttpFoundation\Response;

class SpladeMiddleware
{
    const FLASH_TOASTS = 'splade.flashToasts';

    const FORCE_REFRESH_NEXT_REQUEST = 'splade.forceRefreshNextRequst';

    public function __construct(private SpladeCore $splade)
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

        /** @var Response $response */
        $response = $next($request);

        if ($response->getStatusCode() === 302 && in_array($request->method(), ['PUT', 'PATCH', 'DELETE'])) {
            $response->setStatusCode(303);
        }

        $spladeData = $this->spladeData($request->session());

        if ($response->getStatusCode() === 302 || $response->getStatusCode() === 303) {
            $request->session()->put(static::FLASH_TOASTS, $this->splade->getToasts());
        }

        if ($response->getStatusCode() === 303) {
            $request->session()->put(static::FORCE_REFRESH_NEXT_REQUEST, true);
        }

        if ($this->splade->isSpladeRequest()) {
            if ($response instanceof JsonResponse) {
                $newData = array_merge(
                    $response->getData(true),
                    ['splade' => $spladeData]
                );

                if ($response->exception instanceof ValidationException) {
                    $newData['splade']['errors'] = $response->original['errors'];
                }

                return $response->setData($newData);
            }

            $content = $response->content() ?: '';

            return $response->setContent(json_encode([
                'html'   => $this->splade->isModalRequest() ? $this->parseModalContent($content) : $content,
                'splade' => $spladeData,
            ]));
        }

        if ($response->isSuccessful()) {
            $bladePrefix = config('splade.blade.component_prefix');

            if ($bladePrefix) {
                $bladePrefix .= '-';
            }

            $rendered = view('root', [
                'components' => Blade::render("<x-{$bladePrefix}confirm /><x-{$bladePrefix}toast-wrapper />"),
                'html'       => $response->original ?: '',
                'splade'     => $spladeData,
            ])->render();

            return $response->setContent($rendered);
        }

        return $response;
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

    private function spladeData(Session $session): array
    {
        $flashData = config('splade.share_session_flash_data')
            ? collect($session->get('_flash.old', []))
            : [];

        $flash = collect($flashData)
            ->mapWithKeys(fn ($key) => [$key => $session->get($key)])
            ->toArray();

        return [
            'modal'   => $this->splade->isModalRequest() ? $this->splade->modalType() : null,
            'refresh' => $this->splade->isRefreshRequest() || (bool) $session->pull(static::FORCE_REFRESH_NEXT_REQUEST),
            'flash'   => (object) $flash,
            'errors'  => (object) session('errors')?->toArray(),
            'shared'  => (object) $this->splade->getShared(),
            'toasts'  => array_merge(
                $session->pull(static::FLASH_TOASTS, []),
                $this->splade->getToasts(),
            ),

        ];
    }
}
