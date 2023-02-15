<?php

namespace ProtoneMedia\Splade\Table;

class SearchInput
{
    const EXACT = 'exact';

    const WILDCARD = 'wildcard';

    const WILDCARD_LEFT = 'wildcard_left';

    const WILDCARD_RIGHT = 'wildcard_right';

    /**
     * This class represents a Search Input within a Splade Table.
     *
     * @param  string  $method
     */
    public function __construct(
        public string $key,
        public array $columns,
        public string $label,
        public ?string $value = null,
    ) {
    }

    /**
     * Returns a clone of the instance.
     */
    public function clone(): static
    {
        return new static(
            $this->key,
            $this->columns,
            $this->label,
            $this->value,
        );
    }
}
