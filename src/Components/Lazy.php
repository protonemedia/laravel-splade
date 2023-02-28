<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\SpladeCore;

class Lazy extends Component
{
    use PassesVueVariablesThrough;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public SpladeCore $splade,
        public string $show = '',
        public array|string $passthrough = ''
    ) {
        $this->passthrough = implode(',', Form::splitByComma($passthrough));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $key = $this->splade->newLazyComponentKey();

        return $this->splade->isLazyRequest()
            ? implode([
                '<!--START-SPLADE-LAZY-' . $key . '-->',
                '{{ $slot }}',
                '<!--END-SPLADE-LAZY-' . $key . '-->',
            ]) : view('splade::functional.lazy', [
                'name' => $key,
            ]);
    }
}
