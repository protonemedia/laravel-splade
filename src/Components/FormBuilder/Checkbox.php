<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Checkbox as SpladeCheckbox;
use ProtoneMedia\Splade\Components\FormBuilder\Concerns\HasValue;

class Checkbox extends Component
{
    use HasValue;

    /**
     * Renders the SpladeCheckbox
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        $object = new SpladeCheckbox(
            name:  $this->name,
            value: $this->value ?? $this->label,
            label: $this->label,
            help: $this->help,
        );

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data())->with(['slot' => '']);
    }
}
