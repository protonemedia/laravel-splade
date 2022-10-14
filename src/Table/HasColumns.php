<?php

namespace ProtoneMedia\Splade\Table;

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

    public static function defaultHighlightFirstColumn(bool $state = true)
    {
        static::$defaultHighlightFirstColumn = $state;
    }

    /**
     * Adds a new column to the table.
     *
     * @param  string|null  $key
     * @param  string|null  $label
     * @param  bool|null  $canBeHidden
     * @param  bool  $hidden
     * @param  bool  $sortable
     * @param  bool  $searchable
     * @param  bool|callable  $exportAs
     * @param  callable|null  $exportFormat
     * @param  callable|null  $exportStyling
     * @return $this
     */
    public function column(
        string $key = null,
        string $label = null,
        bool|null $canBeHidden = null,
        bool $hidden = false,
        bool $sortable = false,
        bool|string $searchable = false,
        bool|null $highlight = null,
        bool|callable $exportAs = true,
        callable|string|null $exportFormat = null,
        callable|array|null $exportStyling = null
    ): self {
        $key   = $key   !== null ? $key : Str::kebab($label);
        $label = $label !== null ? $label : Str::headline(str_replace('.', ' ', $key));

        $highlight = is_bool($highlight)
            ? $highlight
            : static::$defaultHighlightFirstColumn;

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
     *
     * @return \Illuminate\Support\Collection
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
     *
     * @return array
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
     *
     * @return bool
     */
    public function hasToggleableColumns(): bool
    {
        return $this->columns
            ->filter(fn (Column $column) => $column->canBeHidden)
            ->isNotEmpty();
    }
}
