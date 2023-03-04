<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

class Submit extends Button
{

    protected bool $spinner = true;
    protected string $type = 'submit';

    /**
     * Enables or disables the spinner
     *
     * @param bool $enabled
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
}
