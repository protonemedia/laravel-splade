<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Support\Str;

trait InstallsSpladeRouteMiddleware
{
    /**
     * Install the middleware to a group in the application Http Kernel.
     *
     * @return void
     */
    protected function installRouteMiddleware()
    {
        $httpKernel = file_get_contents(app_path('Http/Kernel.php'));

        $eol = SpladeInstallCommand::eol();

        $search = version_compare(app()->version(), '10.0', '>=')
            ? 'protected $middlewareAliases = [' . $eol
            : 'protected $routeMiddleware = [' . $eol;

        $routeMiddlewareAfter = Str::after($httpKernel, $search);

        $routeMiddleware = "'splade' => \ProtoneMedia\Splade\Http\SpladeMiddleware::class";

        if (Str::contains($httpKernel, $routeMiddleware)) {
            return;
        }

        file_put_contents(
            app_path('Http/Kernel.php'),
            str_replace(
                $routeMiddlewareAfter,
                '        ' . $routeMiddleware . ',' . $eol . $routeMiddlewareAfter,
                $httpKernel
            )
        );
    }
}
