<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Http;

class Ssr
{
    public function render(array $viewData): array
    {
        $default = ['body' => null];

        return rescue(
            callback: fn () => Http::post(config('splade.ssr.server'), $viewData)->throw()->json(),
            rescue: $default,
            report: false
        ) ?: $default;
    }
}
