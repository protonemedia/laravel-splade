<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Textarea as SpladeTextarea;

class Textarea extends Component
{
    public function autosize(bool $autosize = true): self
    {
        $this->attributes['autosize'] = $autosize;

        return $this;
    }

    /**
     * Renders the SpladeTextarea
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        $object = new SpladeTextarea(
            name: $this->name,
            label: $this->label,
            help: $this->help
        );

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data());
    }
}
