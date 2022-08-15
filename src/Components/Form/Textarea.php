<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;

class Textarea extends Component
{
    use InteractsWithFormElement;

    private static $defaultAutosize = false;

    public static function autosize(bool $value = true)
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
        public string $label = '',
        public bool $showErrors = true
    ) {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.textarea', [
            'defaultAutosize' => static::$defaultAutosize,
        ]);
    }
}
