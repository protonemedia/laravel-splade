<?php

namespace ProtoneMedia\Splade\FormBuilder;

class Submit extends Button
{
    protected bool $spinner = true;

    protected string $type = 'submit';

    /**
     * Enables or disables the spinner
     *
     * @return $this
     */
    public function spinner(bool $enabled = true): self
    {
        $this->spinner = $enabled;

        return $this;
    }

    /**
     * Create a new form field
     */
    public static function make(string $name = ''): static
    {
        return new static($name);
    }
}
