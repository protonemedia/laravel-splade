<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;

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
     * Helper method to create an instance with some defaults.
     *
     * @param  string  $key
     * @param  string  $label
     * @param  bool  $canBeHidden
     * @param  bool  $hidden
     * @param  bool  $sortable
     * @param  bool  $sorted
     * @return static
     */
    public static function make(
        string $key,
        string $label = '',
        bool $canBeHidden = false,
        bool $hidden = false,
        bool $sortable = false,
        bool|string $sorted = false
    ): static {
        return new static($key, $label, $canBeHidden, $hidden, $sortable, $sorted);
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

    /**
     * Returns a boolean whether to columns refers to a relationship.
     *
     * @return bool
     */
    public function isNested(): bool
    {
        return Str::contains($this->key, '.');
    }

    /**
     * Returns the name of the relationship.
     *
     * @return string
     */
    public function relationshipName(): string
    {
        return Str::beforeLast($this->key, '.');
    }

    /**
     * Returns the target column on the relationship.
     *
     * @return string
     */
    public function relationshipColumn(): string
    {
        return Str::afterLast($this->key, '.');
    }
}
