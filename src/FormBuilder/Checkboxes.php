<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Checkboxes as SpladeCheckboxes;
use ProtoneMedia\Splade\FormBuilder\Concerns\CanBeInline;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasOptions;

class Checkboxes extends Component
{
    use HasOptions;
    use CanBeInline;

    /**
     * Renders the SpladeCheckboxex
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeCheckboxes(
            name:    $this->name,
            options: $this->options,
            label:   $this->label,
            inline:  $this->inline,
            help:    $this->help
        );
    }
}
