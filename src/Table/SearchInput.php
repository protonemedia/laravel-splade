<?php

namespace ProtoneMedia\Splade\Table;

class SearchInput
{
    /**
     * This class represents a Search Input within a Splade Table.
     *
     * @param  string  $key
     * @param  string  $label
     * @param  string|null  $value
     */
    public function __construct(
        public string $key,
        public string $label,
        public ?string $value = null,
    ) {
    }

    /**
     * Returns a clone of the instance.
     *
     * @return static
     */
    public function clone(): static
    {
        return new static(
            $this->key,
            $this->label,
            $this->value,
        );
    }
}
