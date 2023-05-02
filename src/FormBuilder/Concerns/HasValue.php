<?php

namespace ProtoneMedia\Splade\FormBuilder\Concerns;

trait HasValue
{
    protected string $value;

    /**
     * Sets the value of the inputfield-option
     *
     * @return $this
     */
    public function value(string|bool|int $value = ''): self
    {
        $this->value = $value;

        return $this;
    }
}
