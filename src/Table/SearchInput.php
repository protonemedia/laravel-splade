<?php

namespace ProtoneMedia\Splade\Table;

class SearchInput
{
    public function __construct(
        public string $key,
        public string $label,
        public ?string $value = null,
    ) {
    }

    public function clone(): static
    {
        return new static(
            $this->key,
            $this->label,
            $this->value,
        );
    }
}
