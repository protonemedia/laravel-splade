<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class IconPicker extends Component
{
    use InteractsWithFormElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public $value = [],
        public HtmlString|string $label = '',
        public string $validationKey = '',
        public bool $showErrors = false,
        public HtmlString|string $help = '',
    ) {
        Form::allowAttribute($name);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.icon-picker');
    }
}
