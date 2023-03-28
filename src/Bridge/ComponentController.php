<?php

namespace ProtoneMedia\Splade\Bridge;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\Components\WithVue;
use ProtoneMedia\Splade\Http\SpladeMiddleware;
use ProtoneMedia\Splade\SpladeCore;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ComponentController extends Controller
{
    public function __invoke(
        Request $request,
        SpladeCore $splade,
        ComponentState $componentState,
        ComponentMiddleware $componentMiddleware,
    ) {
        try {
            $request->validate([
                'data'      => ['nullable', 'array'],
                'instance'  => ['required', 'string'],
                'method'    => ['required', 'string'],
                'props'     => ['nullable', 'array'],
                'signature' => ['required', 'string'],
                'url'       => ['required', 'string'],
                'verb'      => ['required', 'string'],
            ]);
        } catch(ValidationException $e) {
            abort(403, 'Invalid request');
        }

        abort_unless($componentState->requestHasValidSignature($request), 403, 'Malicious request');

        /** @var WithVue */
        $instance = rescue(
            fn () => $componentState->resolveInstance($request),
            fn () => abort(403, 'Component not found'),
        );

        $componentMiddleware->applyOriginalRouteParameters(
            $request->input('url'), $request->input('verb'), $request
        );

        $instance->middleware(
            $componentMiddleware->resolveApplicableMiddleware(
                $request->input('url'), $request->input('verb')
            )
        );

        $result = null;

        if ($method = $request->input('method')) {
            // Make sure the method is publiclly available
            if (!in_array($method, $instance->_availableMethods())) {
                abort(403, 'Method not found');
            }

            // Call the method on the component
            $result = $instance->{$method}(
                ...$request->input('data', [])
            );
        }

        $vueData = $instance->_vueData();

        $toasts = $splade->getToasts();

        if ($result instanceof RedirectResponse) {
            $redirectTargetUrl = $result->getTargetUrl();

            // Save the toasts for the next page
            session()->put(SpladeMiddleware::FLASH_TOASTS, $toasts);

            // No result or toasts as we're redirecting
            $result = null;
            $toasts = [];
        }

        $data = [
            'data'      => $vueData['data'],
            'instance'  => $vueData['instance'],
            'redirect'  => $redirectTargetUrl ?? null,
            'result'    => $result,
            'signature' => null,
            'toasts'    => $toasts,
        ];

        $data['signature'] = $componentState->generateSignature(
            $data['instance'], $request->input('url'), $request->input('verb'),
        );

        return $data;
    }
}
