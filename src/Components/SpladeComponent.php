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

    /**
     * Prepends the 'x-' Blade Component prefix to the given name.
     *
     * @param  string  $name
     * @return string
     */
    public static function tag(string $name): string
    {
        return 'x-' . static::normalize($name);
    }

    /**
     * Prepends the configured prefix to the given component name.
     *
     * @param  string  $name
     * @return string
     */
    public static function normalize(string $name): string
    {
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return $prefix . $name;
    }
}
