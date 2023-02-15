<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;

class Filter implements Arrayable
{
    /**
     * This class represents a filter in a Splade Table.
     */
    public function __construct(
        public string $key,
        public string $label,
        public array $options,
        public ?string $value,
        public bool $noFilterOption,
        public string $noFilterOptionLabel,
        public string $type
    ) {
    }

    /**
     * Returns a clone of the instance.
     */
    public function clone(): static
    {
        return new static(
            $this->key,
            $this->label,
            $this->options,
            $this->value,
            $this->noFilterOption,
            $this->noFilterOptionLabel,
            $this->type
        );
    }

    /**
     * Returns a boolean whether the value is not null.
     */
    public function hasValue(): bool
    {
        return !is_null($this->value);
    }

    /**
     * Returns the options array, and if set, prepends
     * a 'no filter' option to the options array.
     */
    public function options(): array
    {
        $options = $this->options;

        if ($this->noFilterOption) {
            $options = Arr::prepend($options, $this->noFilterOptionLabel, '');
        }

        return $options;
    }

    /**
     * Returns an array with all properties.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'key'     => $this->key,
            'label'   => $this->label,
            'options' => $this->options(),
            'value'   => $this->value,
            'type'    => $this->type,
        ];
    }
}
