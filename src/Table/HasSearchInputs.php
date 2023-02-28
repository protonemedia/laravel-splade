<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\SpladeTable;

trait HasSearchInputs
{
    protected Collection $searchInputs;

    protected static bool|string $defaultGlobalSearch = false;

    /**
     * Loops over the are and verifies that there's both a value
     * and a (string) key. Items without a key will be handled
     * in the QueryFilter::getTermAndWhereOperator() method.
     */
    private static function normalizeSearchColumnsWithMethod(array $keys): array
    {
        return Collection::make($keys)->mapWithKeys(function ($value, $key) {
            if (is_numeric($key)) {
                return [$value => null];
            }

            return [$key => $value];
        })->all();
    }

    /**
     * Add a search input to the table.
     *
     * @param  string  $key
     * @return $this
     */
    public function searchInput(
        array|string $key,
        string $label = null,
        string $defaultValue = null,
        array $columns = []
    ): self {
        if (empty($columns)) {
            $columns = Arr::sort(Arr::wrap($key));
        }

        if (is_array($key)) {
            $key = Str::slug(implode(' ', $columns));
        }

        $columns = static::normalizeSearchColumnsWithMethod($columns);

        $this->searchInputs = $this->searchInputs->reject(function (SearchInput $searchInput) use ($key) {
            return $searchInput->key === $key;
        })->push(new SearchInput(
            key: $key,
            columns: $columns,
            label: $label ?: Str::headline($key),
            value: $defaultValue,
        ))->values();

        return $this;
    }

    /**
     * Returns all Search Inputs, or finds on when $key is not empty.
     *
     * @return \Illuminate\Support\Collection|\ProtoneMedia\Splade\Table\SearchInput|null
     */
    public function searchInputs(string $key = null): Collection|SearchInput|null
    {
        $filters = $this->query('filter', []);

        $searchInputs = $this->searchInputs->map->clone()->keyBy->key;

        if (!empty($filters)) {
            // Apply the input value from the request query.
            $searchInputs->each(function (SearchInput $searchInput) use ($filters) {
                if (array_key_exists($searchInput->key, $filters)) {
                    $searchInput->value = $filters[$searchInput->key];
                }
            });
        }

        return $key ? $searchInputs->get($key) : $searchInputs;
    }

    /**
     * Returns a boolean whether this table has search filters.
     */
    public function hasSearchFiltersEnabled(): bool
    {
        return $this->searchInputs()->filter->value->isNotEmpty();
    }

    /**
     * Returns a boolean whether this table has toggleable search input.
     */
    public function hasToggleableSearchInputs(): bool
    {
        return $this->searchInputs
            ->reject(fn (SearchInput $searchInput) => $searchInput->key === SpladeTable::GLOBAL_SEARCH_KEY)
            ->isNotEmpty();
    }

    /**
     * Set a default for global search.
     *
     * @return void
     */
    public static function defaultGlobalSearch(bool|string $label = 'Search')
    {
        static::$defaultGlobalSearch = $label !== false
            ? __($label) . '...'
            : false;
    }

    /**
     * Helper method to add a global search input.
     *
     * @return $this
     */
    public function withGlobalSearch(string $label = null, array $columns = []): self
    {
        return $this->searchInput(
            key: SpladeTable::GLOBAL_SEARCH_KEY,
            label: $label ?: __('Search') . '...',
            columns: $columns
        );
    }
}
