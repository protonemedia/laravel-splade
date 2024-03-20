<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Support\Str;

trait InstallsSpladeExceptionHandler
{
    /**
     * Install the renderable callback in the application Exception Handler.
     *
     * @return void
     */
    protected function installExceptionHandler()
    {
        version_compare(app()->version(), '11.0', '<')
            ? $this->installExceptionHandlerForLegacyLaravelSkeleton()
            : $this->installExceptionHandlerForModernLaravelSkeleton();
    }

    protected function installExceptionHandlerForModernLaravelSkeleton()
    {
        $appBoostrap = file_get_contents(base_path('bootstrap/app.php'));

        $eol = SpladeInstallCommand::eol();

        $search = '->withExceptions(function (Exceptions $exceptions) {';

        $exceptionHandler = '$exceptions->renderable(\ProtoneMedia\Splade\SpladeCore::exceptionHandler($exceptions->handler));';

        $exceptionsAfter = Str::after($appBoostrap, $search);

        if (Str::contains($appBoostrap, $exceptionHandler)) {
            return;
        }

        file_put_contents(
            base_path('bootstrap/app.php'),
            str_replace(
                $exceptionsAfter,
                $eol . '        ' . $exceptionHandler . $exceptionsAfter,
                $appBoostrap
            )
        );
    }

    protected function installExceptionHandlerForLegacyLaravelSkeleton()
    {
        $eol = SpladeInstallCommand::eol();

        $exceptionHandler = file_get_contents(app_path('Exceptions/Handler.php'));

        $search              = 'public function register(): void' . $eol . '    {';
        $registerMethodAfter = Str::after($exceptionHandler, $search);

        $renderable = '$this->renderable(\ProtoneMedia\Splade\SpladeCore::exceptionHandler($this));';

        if (Str::contains($exceptionHandler, $renderable)) {
            return;
        }

        file_put_contents(
            app_path('Exceptions/Handler.php'),
            str_replace(
                $registerMethodAfter,
                $eol . '        ' . $renderable . $eol . $registerMethodAfter,
                $exceptionHandler
            )
        );
    }
}
