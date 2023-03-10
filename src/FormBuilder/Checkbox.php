<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Checkbox as SpladeCheckbox;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasValue;

class Checkbox extends Component
{
    use HasValue;

    /**
     * Renders the SpladeCheckbox
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeCheckbox(
            name:  $this->name,
            value: $this->value ?? $this->label,
            label: $this->label,
            help: $this->help,
        );
    }
}
