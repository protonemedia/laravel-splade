<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Ssr;

class SsrTestCommand extends Command
{
    public $signature = 'splade:ssr-test';

    public $description = 'Test the SSR server';

    public function handle(): int
    {
        $this->info('Testing SSR server: ' . config('splade.ssr.server'));

        $bladePrefix = config('splade.blade.component_prefix');

        if ($bladePrefix) {
            $bladePrefix .= '-';
        }

        $html = Blade::render("<x-{$bladePrefix}data><p>Test</p></x-{$bladePrefix}data>");

        $result = (new Ssr)->render(
            '',
            $html,
            (object) []
        );

        if (Str::contains($result['body'] ?? '', '<p>Test</p>')) {
            $this->info('OK');

            return 0;
        }

        $this->error('Wrong response.');

        return 1;
    }
}
