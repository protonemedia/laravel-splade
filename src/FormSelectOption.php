<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\View\ComponentAttributeBag;

class FormSelectOption implements Arrayable
{
    /**
     * Creates a new instance.
     *
     * @param  array  $attributes
     */
    public function __construct(
        private array $attributes = []
    ) {
    }

    /**
     * Returns a boolean whether the attributes array contains an 'options' key.
     *
     * @return bool
     */
    public function isGroup(): bool
    {
        return array_key_exists('options', $this->attributes);
    }

    /**
     * Returns the options array from the attributes.
     *
     * @return array
     */
    public function getOptions(): array
    {
        return $this->attributes['options'] ?? [];
    }

    /**
     * Returns a new ComponentAttributeBag instance with the
     * attributes, except the options as we don't want to
     * render those as an attribute.
     *
     * @return \Illuminate\View\ComponentAttributeBag
     */
    public function attributes(): ComponentAttributeBag
    {
        return (new ComponentAttributeBag($this->attributes))->except('options');
    }

    /**
     * Returns the attributes as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->attributes()->getAttributes();
    }
}
