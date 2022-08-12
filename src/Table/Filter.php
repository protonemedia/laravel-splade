<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;

class Filter implements Arrayable
{
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

    public function options()
    {
        $options = $this->options;

        if ($this->noFilterOption) {
            $options = Arr::prepend($options, $this->noFilterOptionLabel, '');
        }

        return $options;
    }

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
