<?php

namespace ProtoneMedia\Splade\Bridge;

use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Http\SpladeMiddleware;

class ComponentMiddleware
{
    /**
     * Gathers the Middleware of the given URL and method, and filters out the
     * Middleware that is already applied to the 'withVueBridge' route.
     */
    public function resolveApplicableMiddleware(string $url, string $method): array
    {
        $originalRequest = $this->makeRequestFromUrlAndMethod($url, $method);

        /** @var Router */
        $router = app('router');

        $originalRoute = $originalRequest->route();
        $handlerRoute  = $router->getRoutes()->getByName('splade.withVueBridge');

        $originalMiddleware = $router->gatherRouteMiddleware($originalRoute);
        $handlerMiddleware  = array_map(function ($middleware) {
            return Str::before($middleware, ':');
        }, $router->gatherRouteMiddleware($handlerRoute));

        return Collection::make($originalMiddleware)->reject(function ($middleware) use ($handlerMiddleware) {
            $middlewareClass = Str::before($middleware, ':');

            return in_array($middlewareClass, $handlerMiddleware) || $middlewareClass === SpladeMiddleware::class;
        })->values()->all();
    }

    /**
     * Returns a new request that matches the route of the given URL and method.
     * Completely stolen from Livewire's HttpConnectionHandler class.
     */
    protected function makeRequestFromUrlAndMethod(string $url, string $method): Request
    {
        $currentRequest = request();

        // Ensure the original script paths are passed into the fake request incase Laravel is running in a subdirectory
        $request = Request::create($url, $method, [], [], [], [
            'SCRIPT_NAME'     => $currentRequest->server->get('SCRIPT_NAME'),
            'SCRIPT_FILENAME' => $currentRequest->server->get('SCRIPT_FILENAME'),
            'PHP_SELF'        => $currentRequest->server->get('PHP_SELF'),
        ]);

        if ($currentRequest->hasSession()) {
            $request->setLaravelSession($currentRequest->session());
        }

        $request->setUserResolver($currentRequest->getUserResolver());

        $route = app('router')->getRoutes()->match($request);

        // For some reason without this octane breaks the route parameter binding.
        $route->setContainer(app());

        $request->setRouteResolver(function () use ($route) {
            return $route;
        });

        return $request;
    }
}
