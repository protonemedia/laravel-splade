<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Submit as SpladeSubmit;

class Submit extends Component
{
    private bool $spinner = true;

    /**
     * Enables or disables the spinner
     *
     * @param bool $spinner
     * @return $this
     */
    public function spinner(bool $enabled = true): self
    {
        $this->spinner = $enabled;

        return $this;
    }

    /**
     * Create a new form field
     *
     * @param string $name
     * @return static
     */
    static function make(string $name = 'submit'): static
    {
        return new static($name);
    }

    /**
     * Renders the SpladeSubmit
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        $object = new SpladeSubmit(
            label:   $this->label,
            spinner: $this->spinner,
            name:    $this->name
        );

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data())->with(['slot' => '']);
    }
}
