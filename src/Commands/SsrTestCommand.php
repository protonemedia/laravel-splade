<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Http\SpladeResponseData;
use ProtoneMedia\Splade\Ssr;

class SsrTestCommand extends Command
{
    public $signature = 'splade:ssr-test';

    public $description = 'Test the SSR server';

    /**
     * Sends a request to the SSR servers and verifies that it rendered correctly.
     */
    public function handle(): int
    {
        $this->info('Testing SSR server: ' . config('splade.ssr.server'));

        $dataTag = SpladeComponent::tag('data');

        $result = (new Ssr)->render(
            components: '',
            html: Blade::render("<{$dataTag}><p>Test</p></{$dataTag}>"),
            dynamics: [],
            splade: SpladeResponseData::make()
        );

        if (Str::contains($result['body'] ?? '', '<p>Test</p>')) {
            $this->info('OK');

            return static::SUCCESS;
        }

        $this->error('Wrong response.');

        return static::FAILURE;
    }
}
