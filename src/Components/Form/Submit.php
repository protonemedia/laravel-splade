<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use ProtoneMedia\Splade\Components\Button;

class Submit extends Component
{
    /**
     * It's a primary button by default.
     */
    public bool $primary = true;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public HtmlString|string $label = 'Submit',
        public string $type = 'submit',
        public bool $spinner = true,
        public string $name = '',
        public $value = null,
        public $danger = false,
        public $secondary = false,
    ) {
        $this->primary = !$this->danger && !$this->secondary;
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

    /**
     * Returns a boolean whether there are background or text classes.
     */
    public function hasCustomStyling(ComponentAttributeBag $attributes): bool
    {
        return Button::hasCustomStyling($attributes);
    }
}
