<?php

namespace ProtoneMedia\Splade\FormBuilder\Concerns;

trait HasOptions
{
    protected array $options = [];

    /**
     * Set an array with options
     *
     * @param  array  $options ['value1' => 'Label 1', 'value2' => 'Label 2']
     * @return $this
     */
    public function options(array $options = []): self
    {
        $this->options = $options;

        return $this;
    }
}
