<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class Checkboxes extends Component
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
        public string $help = '',
        public bool $relation = false
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
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return view('splade::form.checkboxes', [
            'groupName'    => $prefix . 'group',
            'checkboxName' => $prefix . 'checkbox',
        ]);
    }
}
