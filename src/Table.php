<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Table\Column;

class Table
{
    public $resource;
    public Collection $columns;

    public function __construct($resource)
    {
        $this->resource = $resource;
        $this->columns  = new Collection;
    }

    /**
     * Add a column to the query builder.
     *
     * @param string|null $key
     * @param string|null $label
     * @param bool $canBeHidden
     * @param bool $hidden
     * @param bool $sortable
     * @param bool $searchable
     * @return self
     */
    public function column(
        string $key = null,
        string $label = null,
        bool $canBeHidden = true,
        bool $hidden = false,
        bool $sortable = false,
        bool $searchable = false
    ): self {
        $key   = $key ?: Str::kebab($label);
        $label = $label ?: Str::headline($key);

        $this->columns = $this->columns->reject(function (Column $column) use ($key) {
            return $column->key === $key;
        })->push($column = new Column(
            key: $key,
            label: $label,
            canBeHidden: $canBeHidden,
            hidden: $hidden,
            sortable: $sortable,
            sorted: false
        ))->values();

        return $this;
    }

    public static function for($resource): static
    {
        return new static($resource);
    }
}
