<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Confirm extends Component
{
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::components.confirm');
    }
}
