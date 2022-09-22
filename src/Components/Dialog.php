<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Dialog extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        private string $open = '',
        private bool $unmount = true,
        private bool $panel = false,
        private string $close = '',
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::dialog', [
            'panel'   => $this->panel,
            'open'    => $this->open,
            'unmount' => $this->unmount,
            'close'   => $this->close,
        ]);
    }
}
