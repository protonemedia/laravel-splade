<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Http;
use ProtoneMedia\Splade\Http\SpladeResponseData;

class Ssr
{
    /**
     * Make a request to the SSR process, but don't report anything when it's unsuccessful.
     */
    public function render(string $components, string $html, array $dynamics, SpladeResponseData $splade): array
    {
        $default = ['body' => null];

        $data = [
            'components' => $components,
            'html'       => $html,
            'dynamics'   => $dynamics,
            'splade'     => $splade->toArray(),
        ];

        return rescue(
            callback: fn () => Http::post(config('splade.ssr.server'), $data)->throw()->json(),
            rescue: $default,
            report: false
        ) ?: $default;
    }
}
