<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Str;
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
        $key = Str::random();

        return $this->splade->isLazyRequest()
            ? implode([
                '<!--START-SPLADE-LAZY-' . $key . '-->',
                '{{ $slot }}',
                '<!--END-SPLADE-LAZY-' . $key . '-->',
            ]) : view('splade::functional.lazy', [
                'name' => $this->splade->newLazyComponentKey(),
            ]);
    }
}
