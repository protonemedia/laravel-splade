<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Radio as SpladeRadio;
use ProtoneMedia\Splade\Components\FormBuilder\Concerns\HasValue;

class Radio extends Component
{
    use HasValue;

    /**
     * Renders the SpladeRadio
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        $object = new SpladeRadio(
            name:  $this->name,
            value: $this->value ?? $this->label,
            label: $this->label,
            help: $this->help
        );

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data())->with(['slot' => '']);
    }
}
