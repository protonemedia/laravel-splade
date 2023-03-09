<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Radios as SpladeRadios;
use ProtoneMedia\Splade\FormBuilder\Concerns\CanBeInline;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasOptions;

class Radios extends Component
{
    use HasOptions;
    use CanBeInline;

    /**
     * Renders the SpladeRadios
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeRadios(
            name:    $this->name,
            options: $this->options,
            label:   $this->label,
            inline:  $this->inline,
            help:    $this->help
        );
    }
}
