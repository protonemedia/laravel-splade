<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Radio as SpladeRadio;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasValue;

class Radio extends Component
{
    use HasValue;

    /**
     * Renders the SpladeRadio
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeRadio(
            name:  $this->name,
            value: $this->value ?? $this->label,
            label: $this->label,
            help: $this->help
        );
    }
}
