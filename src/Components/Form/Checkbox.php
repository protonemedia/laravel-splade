<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;

class Checkbox extends Component
{
    use InteractsWithFormElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public $value = 1,
        public string $label = '',
        public string $validationKey = '',
        public bool $showErrors = true,
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.checkbox');
    }
}
