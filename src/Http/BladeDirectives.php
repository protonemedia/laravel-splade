<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;

class BladeDirectives
{
    public function registerHandlers()
    {
        Blade::directive('splade', [$this, 'splade']);
        Blade::directive('spladeHead', [$this, 'spladeHead']);
    }

    public function splade($expression = '')
    {
        $id = trim(trim($expression), "\'\"") ?: 'app';

        $template[] = '<div id="' . $id . '" data-components="{{ json_encode($components) }}" data-html="{{ json_encode($html) }}" data-splade="{{ json_encode($splade) }}">';
        $template[] = '{!! $ssrBody !!}';
        $template[] = '</div>';

        return implode(PHP_EOL, $template);
    }

    public function spladeHead()
    {
        return '{{ app(\'laravel-splade-seo\')->renderHead() }}';
    }
}
