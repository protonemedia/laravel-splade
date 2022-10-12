<?php

namespace ProtoneMedia\Splade\Table;

use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Collection;
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
     * @param  bool|Closure  $exportAs
     * @param  Closure  $exportFormat
     * @param  Closure  $exportStyling
     */
    public function __construct(
        public string $key,
        public string $label,
        public bool $canBeHidden,
        public bool $hidden,
        public bool $sortable,
        public bool|string $sorted,
        public bool|Closure $exportAs,
        public ?Closure $exportFormat = null,
        public ?Closure $exportStyling = null,
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
            $this->exportAs,
            $this->exportFormat,
            $this->exportStyling,
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
     * @param  bool|callable  $exportAs
     * @return static
     */
    public static function make(
        string $key,
        string $label = '',
        bool $canBeHidden = false,
        bool $hidden = false,
        bool $sortable = false,
        bool|string $sorted = false,
        bool|callable $exportAs = true,
        callable|null $exportFormat = null,
        callable|null $exportStyling = null,
    ): static {
        return new static(
            $key,
            $label,
            $canBeHidden,
            $hidden,
            $sortable,
            $sorted,
            is_bool($exportAs) ? $exportAs : Closure::fromCallable($exportAs),
            $exportFormat ? Closure::fromCallable($exportFormat) : null,
            $exportStyling ? Closure::fromCallable($exportStyling) : null,
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

    /**
     * It gets thet data from the given item, based on the column
     * and whether that column is based on a relationship
     * Supports returning multiple items as well.
     *
     * @param  mixed  $item
     * @return mixed
     */
    public function getDataFromItem($item)
    {
        if ($this->isNested()) {
            $results = data_get($item, $this->relationshipName());

            if ($results instanceof Collection) {
                $key = $this->relationshipColumn();

                return $results->map->{$key}->implode(PHP_EOL);
            }
        }

        return data_get($item, $this->key);
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
