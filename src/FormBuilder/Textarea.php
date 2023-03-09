<?php

namespace ProtoneMedia\Splade\FormBuilder;

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
    public function toSpladecomponent()
    {
        return new SpladeTextarea(
            name: $this->name,
            label: $this->label,
            help: $this->help
        );
    }
}
