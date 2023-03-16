<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class ModalWrapper extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $key,
        public $baseAttributes,
        public bool $closeButton,
        public string $name = '',
        public bool $closeExplicitly = false,
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::components.modal-wrapper');
    }
}
