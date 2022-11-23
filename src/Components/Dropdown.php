<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Str;
use Illuminate\View\Component;

class Dropdown extends Component
{
    public string $spladeId;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public bool $inline = false,
        public bool $teleport = false,
        public bool $closeOnClick = false,
    ) {
        $this->spladeId = Str::random();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::components.dropdown');
    }
}
