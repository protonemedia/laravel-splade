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
        version_compare(app()->version(), '11.0', '<')
            ? $this->installRouteMiddlewareForLegacyLaravelSkeleton()
            : $this->installRouteMiddlewareForModernLaravelSkeleton();
    }

    protected function installRouteMiddlewareForModernLaravelSkeleton()
    {
        $appBoostrap = file_get_contents(base_path('bootstrap/app.php'));

        $eol = SpladeInstallCommand::eol();

        $search = '->withMiddleware(function (Middleware $middleware) {';

        $routeMiddleware = '$middleware->group(\'splade\', [\ProtoneMedia\Splade\Http\SpladeMiddleware::class]);';

        $middlewareAfter = Str::after($appBoostrap, $search);

        if (Str::contains($appBoostrap, $routeMiddleware)) {
            return;
        }

        file_put_contents(
            base_path('bootstrap/app.php'),
            str_replace(
                $middlewareAfter,
                $eol . '        ' . $routeMiddleware . $middlewareAfter,
                $appBoostrap
            )
        );
    }

    protected function installRouteMiddlewareForLegacyLaravelSkeleton()
    {
        $httpKernel = file_get_contents(app_path('Http/Kernel.php'));

        $eol = SpladeInstallCommand::eol();

        $search = 'protected $middlewareAliases = [' . $eol;

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
