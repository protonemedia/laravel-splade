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
        $eol = SpladeInstallCommand::eol();

        $exceptionHandler = file_get_contents(app_path('Exceptions/Handler.php'));

        $search = version_compare(app()->version(), '10.0', '>=')
            ? 'public function register(): void' . $eol . '    {'
            : 'public function register()' . $eol . '    {';

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
