<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Checkboxes as SpladeCheckboxes;
use ProtoneMedia\Splade\Components\FormBuilder\Concerns\HasOptions;
use ProtoneMedia\Splade\Components\FormBuilder\Concerns\IsInline;

class Checkboxes extends Component
{
    use HasOptions;
    use IsInline;

    /**
     * Renders the SpladeCheckboxex
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        $object = new SpladeCheckboxes(
            name:    $this->name,
            options: $this->options,
            label:   $this->label,
            inline:  $this->inline,
            help:    $this->help
        );

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data())->with(['slot' => '']);
    }
}
