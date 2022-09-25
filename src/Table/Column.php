<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Contracts\Support\Arrayable;

class Column implements Arrayable
{
    /**
     * This class represents a column within a Splade Table.
     *
     * @param  string  $key
     * @param  string  $label
     * @param  bool  $canBeHidden
     * @param  bool  $hidden
     * @param  bool  $sortable
     * @param  bool|string  $sorted
     */
    public function __construct(
        public string $key,
        public string $label,
        public bool $canBeHidden,
        public bool $hidden,
        public bool $sortable,
        public bool|string $sorted
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
            $this->canBeHidden,
            $this->hidden,
            $this->sortable,
            $this->sorted,
        );
    }

    /**
     * Returns an array with all properties.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'key'           => $this->key,
            'label'         => $this->label,
            'can_be_hidden' => $this->canBeHidden,
            'hidden'        => $this->hidden,
            'sortable'      => $this->sortable,
            'sorted'        => $this->sorted,
        ];
    }
}
