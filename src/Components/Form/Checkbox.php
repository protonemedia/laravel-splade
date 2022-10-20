<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

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
        public string $vModel = '',
        public $value = true,
        public string $label = '',
        public string $validationKey = '',
        public bool $showErrors = true,
        public string $help = '',
        public bool $relation = false,
        public $falseValue = false,
    ) {
        Form::allowAttribute($name);

        if ($relation) {
            Form::parseEloquentRelation($name);
        }
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
