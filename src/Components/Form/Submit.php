<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;

class Submit extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $label = 'Submit',
        public string $type = 'submit',
        public bool $spinner = true
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.submit');
    }
}
