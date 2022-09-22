<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class Textarea extends Component
{
    use InteractsWithFormElement;

    private static $defaultAutosize = false;

    public static function defaultAutosize(bool $value = true)
    {
        static::$defaultAutosize = $value;
    }

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public string $label = '',
        public string $validationKey = '',
        public bool $showErrors = true,
        public string $help = '',
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
        return view('splade::form.textarea', [
            'defaultAutosizeValue' => static::$defaultAutosize,
        ]);
    }
}
