<?php

namespace ProtoneMedia\Splade\FormBuilder\Concerns;

trait HasValue
{
    protected $value;

    /**
     * Sets the value of the inputfield-option
     *
     * @return $this
     */
    public function value($value): self
    {
        $this->value = $value;

        return $this;
    }
}
