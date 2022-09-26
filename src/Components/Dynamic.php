<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Dynamic extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return implode([
            '<!--START-SPLADE-DYNAMIC-' . $this->name . '-->',
            '{{ $slot }}',
            '<!--END-SPLADE-DYNAMIC-' . $this->name . '-->',
        ]);
    }
}
