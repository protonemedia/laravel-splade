<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\DynamicComponent;

class SpladeComponent extends DynamicComponent
{
    /**
     * Create a new component instance.
     *
     * @param  string  $component
     * @return void
     */
    public function __construct(string $is)
    {
        $this->component = static::normalize($is);
    }

    public static function tag($name): string
    {
        return 'x-' . static::normalize($name);
    }

    public static function normalize($name): string
    {
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return $prefix . $name;
    }
}
