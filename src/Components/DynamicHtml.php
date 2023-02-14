<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class DynamicHtml extends Component
{
    use PassesVueVariablesThrough;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
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
        return view('splade::functional.dynamicHtml');
    }
}
