<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Content extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public $html,
        public string $as = 'div'
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.content');
    }
}
