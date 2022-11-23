<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\SpladeCore;

class Lazy extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public SpladeCore $splade,
        public string $show = ''
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return $this->splade->isLazyRequest()
            ? '{{ $slot }}'
            : view('splade::functional.lazy', [
                'name' => $this->splade->newLazyComponentKey(),
            ]);
    }
}
