<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Support\Str;

trait InstallsSpladeExceptionHandler
{
    protected function installExceptionHandler()
    {
        $eol = SpladeInstallCommand::eol();

        $exceptionHandler = file_get_contents(app_path('Exceptions/Handler.php'));

        $search = 'public function register()' . $eol . '    {';

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
