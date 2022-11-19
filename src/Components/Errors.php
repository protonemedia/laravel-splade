<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Errors extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $scope = 'errors'
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.errors');
    }
}
