<?php

namespace ProtoneMedia\Splade\Components\FormBuilder\Concerns;

trait HasValue
{
    protected string $value;

    /**
     * Sets the value of the inputfield-option
     *
     * @param string $value
     * @return $this
     */
    public function value(string $value = ''): self
    {
        $this->value = $value;

        return $this;
    }
}
