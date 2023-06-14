<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Wysiwyg as SpladeWysiwyg;

class Wysiwyg extends Component
{
    /**
     * Renders the SpladeWysiwyg
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladecomponent()
    {
        return new SpladeWysiwyg(
            name: $this->name,
            label: $this->label,
            help: $this->help
        );
    }
}
