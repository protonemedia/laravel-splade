<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class Radios extends Component
{
    use InteractsWithFormElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public $options = [],
        public string $label = '',
        public bool $inline = false,
        public string $help = ''
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
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return view('splade::form.radios', [
            'groupName' => $prefix . 'group',
            'radioName' => $prefix . 'radio',
        ]);
    }
}
