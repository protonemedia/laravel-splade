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
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        $this->component = $prefix . $is;
    }
}
