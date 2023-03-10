<?php

namespace ProtoneMedia\Splade\FormBuilder;

class Number extends Input
{
    protected string $type = 'number';

    /**
     * Set the min-value
     *
     * @return $this
     */
    public function minValue(int $value): self
    {
        $this->attributes['min'] = $value;

        return $this;
    }

    /**
     * Set the max-value
     *
     * @return $this
     */
    public function maxValue(int $value): self
    {
        $this->attributes['max'] = $value;

        return $this;
    }

    /**
     * Set the min-value to 0
     *
     * @return $this
     */
    public function unsigned(): self
    {
        $this->minValue(0);

        return $this;
    }

    /**
     * Set the step-size
     *
     * @param  float|int  $value
     * @return $this
     */
    public function step($step = 1): self
    {
        $this->attributes['step'] = $step;

        return $this;
    }
}
