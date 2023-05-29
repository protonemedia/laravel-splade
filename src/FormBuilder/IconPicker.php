<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\IconPicker as SpladeIconPicker;

class IconPicker extends Component
{
    /**
     * Renders the SpladeIconPicker
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladecomponent()
    {
        return new SpladeIconPicker(
            name: $this->name,
            label: $this->label,
            help: $this->help
        );
    }
}
