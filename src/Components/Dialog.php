<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Str;
use Illuminate\View\Component;

class Dialog extends Component
{
    public string $spladeId;

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
        $this->spladeId = Str::random();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.dialog', [
            'panel'   => $this->panel,
            'open'    => $this->open,
            'unmount' => $this->unmount,
            'close'   => $this->close,
        ]);
    }
}
