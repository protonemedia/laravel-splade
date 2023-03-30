<?php

namespace ProtoneMedia\Splade\Table;

use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

trait HasColumns
{
    protected Collection $columns;

    protected static bool $defaultHighlightFirstColumn = false;

    protected static bool $defaultColumnCanBeHidden = true;

    /**
     * Set a default for column hideable.
     *
     * @param  bool
     * @return void
     */
    public static function defaultColumnCanBeHidden(bool $state = true)
    {
        static::$defaultColumnCanBeHidden = $state;
    }

    /**
     * Set a default highlight setting for the first column.
     *
     * @return void
     */
    public static function defaultHighlightFirstColumn(bool $state = true)
    {
        static::$defaultHighlightFirstColumn = $state;
    }

    /**
     * Adds a new column to the table.
     *
     * @param  bool|null  $canBeHidden
     * @param  bool  $searchable
     * @param  callable|null  $exportFormat
     * @param  callable|null  $exportStyling
     * @return $this
     */
    public function column(
        string $key = null,
        string $label = null,
        bool|null $canBeHidden = null,
        bool $hidden = false,
        bool|Closure $sortable = false,
        bool|string $searchable = false,
        bool|null $highlight = null,
        bool|callable $exportAs = true,
        callable|string|null $exportFormat = null,
        callable|array|null $exportStyling = null,
        array|string|null $classes = null,
        callable|null $as = null,
        string $alignment = 'left',
    ): self {
        $key   = $key   !== null ? $key : Str::kebab($label);
        $label = $label !== null ? $label : Str::headline(str_replace('.', ' ', $key));

        $highlight = is_bool($highlight)
            ? $highlight
            : ($this->columns->isEmpty() ? static::$defaultHighlightFirstColumn : false);

        $canBeHidden = is_bool($canBeHidden)
            ? $canBeHidden
            : static::$defaultColumnCanBeHidden;

        $this->columns = $this->columns->reject(function (Column $column) use ($key) {
            return $column->key === $key;
        })->push(new Column(
            key: $key,
            label: $label,
            canBeHidden: $canBeHidden,
            hidden: $hidden,
            sortable: $sortable,
            sorted: false,
            highlight: $highlight,
            exportAs: $exportAs,
            exportFormat: $exportFormat,
            exportStyling: $exportStyling,
            classes: $classes,
            as: $as,
            alignment: $alignment,
        ))->values();

        if (!$searchable) {
            return $this;
        }

        return $this->searchInput(
            key: $key,
            label: $label,
        );
    }

    /**
     * Returns a coolean with all columns, and applies the
     * data from the request query to each column.
     */
    public function columns(): Collection
    {
        return $this->columns->map(function (Column $column) {
            $cloned = $column->clone();

            $sort = $this->query('sort', $this->defaultSort);

            $sorted = false;

            if ($sort === $column->key) {
                $sorted = 'asc';
            } elseif ($sort === "-{$column->key}") {
                $sorted = 'desc';
            }

            $cloned->sorted = $sorted;

            //

            $queryColumns = $this->query('columns', []);

            if (!empty($queryColumns) && $column->canBeHidden) {
                $cloned->hidden = !in_array($column->key, $queryColumns);
            }

            return $cloned;
        });
    }

    /**
     * Returns an array with all columns that are visible by default.
     */
    public function defaultVisibleToggleableColumns(): array
    {
        return $this->columns
            ->filter(fn (Column $column) => !$column->canBeHidden || ($column->canBeHidden && !$column->hidden))
            ->map->key
            ->sort()
            ->values()
            ->all();
    }

    /**
     * Return a boolean whether this table has toggleable columns.
     */
    public function hasToggleableColumns(): bool
    {
        return $this->columns
            ->filter(fn (Column $column) => $column->canBeHidden)
            ->isNotEmpty();
    }
}
