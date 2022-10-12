<?php

namespace ProtoneMedia\Splade;

use App\Tables\AbstractTable;
use Exception;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use ProtoneMedia\Splade\Table\BulkAction;
use ProtoneMedia\Splade\Table\Column;
use ProtoneMedia\Splade\Table\Export;
use ProtoneMedia\Splade\Table\Filter;
use ProtoneMedia\Splade\Table\SearchInput;

class SpladeTable
{
    protected string $name = 'default';

    protected array $perPageOptions = [];

    public $resource = [];

    protected Collection $columns;

    protected Collection $filters;

    protected Collection $searchInputs;

    public Collection $rowLinks;

    protected string $defaultSort = '';

    protected Request $request;

    protected static bool $defaultColumnCanBeHidden = true;

    protected static bool|string $defaultGlobalSearch = false;

    protected static array $defaultPerPageOptions = [15, 30, 50, 100];

    protected static int $defaultSearchDebounce = 350;

    protected static bool $hidePaginationWhenResourceContainsOnePage = false;

    protected string $primaryKey = '';

    protected array $bulkActions = [];

    protected array $exports = [];

    protected ?AbstractTable $configurator = null;

    /**
     * Creates a new instance.
     *
     * @param  mixed  $resource
     * @param  \Illuminate\Http\Request|null  $request
     */
    public function __construct($resource, Request $request = null)
    {
        $this->request = $request ?: request();

        $this->resource = $resource;

        $this->columns      = new Collection;
        $this->filters      = new Collection;
        $this->searchInputs = new Collection;
        $this->rowLinks     = new Collection;

        if (static::$defaultGlobalSearch !== false) {
            $this->withGlobalSearch(static::$defaultGlobalSearch);
        }

        $this->perPageOptions(static::$defaultPerPageOptions);
    }

    /**
     * Helper method to create a new instance.
     *
     * @param  mixed  $resource
     * @return QueryBuilder|static
     */
    public static function for($resource): QueryBuilder|static
    {
        if (is_string($resource)) {
            $resource = app($resource);
        }

        if ($resource instanceof Model) {
            $resource = $resource->newQuery();
        }

        if ($resource instanceof Builder) {
            return new QueryBuilder($resource);
        }

        return new static($resource);
    }

    /**
     * Sets the class that configurates this table.
     *
     * @param AbstractTable $configurator
     * @return self
     */
    public function setConfigurator(AbstractTable $configurator): self
    {
        $this->configurator = $configurator;

        return $this;
    }

    /**
     * Retrieve a query string item from the request.
     *
     * @param  string  $key
     * @param  mixed|null  $default
     * @return mixed
     */
    protected function query(string $key, $default = null)
    {
        return $this->request->query(
            $this->name === 'default' ? $key : "{$this->name}_{$key}",
            $default
        );
    }

    /**
     * Name for this table.
     *
     * @param  string  $name
     * @return self
     */
    public function name(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Per Page options for this table.
     *
     * @param  array  $perPageOptions
     * @return self
     */
    public function perPageOptions(array $perPageOptions): self
    {
        $this->perPageOptions = $perPageOptions;

        return $this;
    }

    /**
     * Set a default for the per page options.
     *
     * @param  array  $perPageOptions
     * @return void
     */
    public static function defaultPerPageOptions(array $perPageOptions)
    {
        static::$defaultPerPageOptions = $perPageOptions;
    }

    /**
     * Get the default debounce value.
     *
     * @return int
     */
    public static function getDefaultSearchDebounce(): int
    {
        return static::$defaultSearchDebounce;
    }

    /**
     * Set a default debounce value.
     *
     * @param  int  $milliseconds
     * @return void
     */
    public static function defaultSearchDebounce(int $milliseconds)
    {
        static::$defaultSearchDebounce = max(0, $milliseconds);
    }

    /**
     * Getter for the 'hidePaginationWhenResourceContainsOnePage' setting.
     *
     * @return bool
     */
    public static function hidesPaginationWhenResourceContainsOnePage(): bool
    {
        return static::$hidePaginationWhenResourceContainsOnePage;
    }

    /**
     * Hides the pagination component when the resource contains one page.
     *
     * @param  bool  $value
     * @return void
     */
    public static function hidePaginationWhenResourceContainsOnePage(bool $value = true)
    {
        static::$hidePaginationWhenResourceContainsOnePage = $value;
    }

    /**
     * Set a default for global search.
     *
     * @param  bool|string  $label
     * @return void
     */
    public static function defaultGlobalSearch(bool|string $label = 'Search')
    {
        static::$defaultGlobalSearch = $label !== false
            ? __($label) . '...'
            : false;
    }

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
     * Loops over the are and verifies that there's both a value
     * and a (string) key. Items without a key will be handled
     * in the QueryFilter::getTermAndWhereOperator() method.
     *
     * @param  array  $keys
     * @return array
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
     * Helper method to add a global search input.
     *
     * @param  string|null  $label
     * @return self
     */
    public function withGlobalSearch(string $label = null, array $columns = []): self
    {
        return $this->searchInput(
            key: 'global',
            label: $label ?: __('Search') . '...',
            columns: $columns
        );
    }

    /**
     * Setter for the row-link callable that will be called for
     * every row in the data set to determine the target URL.
     *
     * @param  callable  $callback
     * @return self
     */
    public function rowLink(callable $callback): self
    {
        $collection = $this->resource instanceof LengthAwarePaginator
            ? $this->resource->items()
            : $this->resource;

        $this->rowLinks = Collection::make($collection)->map($callback);

        return $this;
    }

    /**
     * Returns a boolean whether the data set should be sorted.
     *
     * @return bool
     */
    public function isSorted(): bool
    {
        return $this->query('sort') ? true : false;
    }

    /**
     * Resolves the current page from the request.
     *
     * @return int
     */
    public function page(): int
    {
        return Paginator::resolveCurrentPage();
    }

    /**
     * Determine how many items are being shown per page.
     *
     * @return int
     */
    public function perPage(): int
    {
        if ($this->resource instanceof LengthAwarePaginator) {
            return $this->resource->perPage();
        }

        return count($this->resource);
    }

    /**
     * Determine if the resource is empty or not.
     *
     * @return bool
     */
    public function isEmpty(): bool
    {
        return count($this->resource) === 0;
    }

    /**
     * Determine if the resource is not empty.
     *
     * @return bool
     */
    public function isNotEmpty(): bool
    {
        return !$this->isEmpty();
    }

    /**
     * Returns an array with all 'per page' amount options.
     *
     * @return array
     */
    public function allPerPageOptions(): array
    {
        return collect($this->perPageOptions)
            ->push($this->perPage())
            ->unique()
            ->sort()
            ->all();
    }

    /**
     * Setter for the default sort key.
     *
     * @param  string  $defaultSort
     * @return self
     */
    public function defaultSort(string $defaultSort): self
    {
        $this->defaultSort = $defaultSort;

        return $this;
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
     * @return self
     */
    public function column(
        string $key = null,
        string $label = null,
        bool|null $canBeHidden = null,
        bool $hidden = false,
        bool $sortable = false,
        bool|string $searchable = false,
        bool|callable $exportAs = true,
        callable|null $exportFormat = null,
        callable|null $exportStyling = null
    ): self {
        $key   = $key   !== null ? $key : Str::kebab($label);
        $label = $label !== null ? $label : Str::headline(str_replace('.', ' ', $key));

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
     * Add a search input to the table.
     *
     * @param  string  $key
     * @param  string|null  $label
     * @param  string|null  $defaultValue
     * @return self
     */
    public function searchInput(
        array|string $key,
        string $label = null,
        string $defaultValue = null,
        array $columns = []
    ): self {
        if (empty($columns)) {
            $columns = Arr::sort(Arr::wrap($key));
            $key     = Str::slug(implode(' ', $columns));
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
     * Returns all Search Inputs, or finds on when $key is not empty.
     *
     * @param  string|null  $key
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
     * Add a select filter to the query builder.
     *
     * @param  string  $key
     * @param  array  $options
     * @param  string|null  $label
     * @param  string|null  $defaultValue
     * @param  bool  $noFilterOption
     * @param  string|null  $noFilterOptionLabel
     * @return self
     */
    public function selectFilter(string $key, array $options, string $label = null, string $defaultValue = null, bool $noFilterOption = true, string $noFilterOptionLabel = null): self
    {
        $this->filters = $this->filters->reject(function (Filter $filter) use ($key) {
            return $filter->key === $key;
        })->push(new Filter(
            key: $key,
            label: $label ?: Str::headline($key),
            options: $options,
            value: $defaultValue,
            noFilterOption: $noFilterOption,
            noFilterOptionLabel: $noFilterOptionLabel ?: '-',
            type: 'select'
        ))->values();

        return $this;
    }

    /**
     * Returns a collection with all filters, and applies
     * the data from the request query on each of them.
     *
     * @return \Illuminate\Support\Collection
     */
    public function filters(): Collection
    {
        $queryFilters = $this->query('filter', []);

        $filters = $this->filters->map->clone()->keyBy->key;

        if (!empty($filters)) {
            $filters->each(function (Filter $filter) use ($queryFilters) {
                if (array_key_exists($filter->key, $queryFilters)) {
                    $filter->value = $queryFilters[$filter->key];
                }
            });
        }

        return $filters;
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
     * Returns a boolean whether this table has bulk actions.
     *
     * @return boolean
     */
    public function hasBulkActions(): bool
    {
        return !empty($this->bulkActions);
    }

    public function hasExports(): bool
    {
        return !empty($this->exports);
    }

    /**
     * Returns a boolean whether the request query has a 'perPage' item.
     *
     * @return bool
     */
    public function hasPerPageQuery(): bool
    {
        return $this->query('perPage') !== null;
    }

    /**
     * Returns a boolean whether this table has filters.
     *
     * @return bool
     */
    public function hasFilters(): bool
    {
        return $this->filters->isNotEmpty();
    }

    /**
     * Returns a boolean whether this table has filters enabled.
     *
     * @return bool
     */
    public function hasFiltersEnabled(): bool
    {
        return $this->filters()->filter->value->isNotEmpty();
    }

    /**
     * Returns a boolean whether this table has search filters.
     *
     * @return bool
     */
    public function hasSearchFiltersEnabled(): bool
    {
        return $this->searchInputs()->filter->value->isNotEmpty();
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

    /**
     * Returns a boolean whether this table has toggleable search input.
     *
     * @return bool
     */
    public function hasToggleableSearchInputs(): bool
    {
        return $this->searchInputs
            ->reject(fn (SearchInput $searchInput) => $searchInput->key === 'global')
            ->isNotEmpty();
    }

    /**
     * Any action that should be performed before rendering the Table component.
     *
     * @return void
     */
    public function beforeRender()
    {
    }

    /**
     * Returns the primary key of the given item.
     *
     * @param  mixed  $item
     * @return mixed
     */
    public function findPrimaryKey($item)
    {
        if ($this->primaryKey) {
            return data_get($item, $this->primaryKey);
        }

        if ($item instanceof Model) {
            return $item->getKey();
        }

        throw new Exception("No primary key configured");
    }

    /**
     * Returns array with all primary keys.
     *
     * @return array
     */
    public function getPrimaryKeys(): array
    {
        $ids = [];

        foreach ($this->resource as $item) {
            $ids[] = $this->findPrimaryKey($item);
        }

        return $ids;
    }

    public function getExports()
    {
        return $this->exports;
    }

    public function export(
        string $label = null,
        string $filename = null,
        string $type = null,
    ): self {
        if ($filename === null) {
            $filename = $this->configurator
                ? Str::slug(class_basename($this->configurator)) . '.xlsx'
                : 'export.xlsx';
        }

        $key = count($this->exports);

        $this->exports[$key] = new Export(
            key: $key,
            label: $label ?: __('Excel Export'),
            filename: $filename,
            type: $type ?: Excel::XLSX,
            tableClass: get_class($this->configurator),
        );

        return $this;
    }

    public function getBulkActions(): array
    {
        return $this->bulkActions;
    }

    public function bulkAction(
        string $label,
        callable $each = null,
        callable $before = null,
        callable $after = null
    ): self {
        $key = count($this->bulkActions);

        $defaultCallback = fn () => 0;

        $this->bulkActions[$key] = new BulkAction(
            key: $key,
            label: $label,
            tableClass: get_class($this->configurator),
            eachCallback: $each ?: $defaultCallback,
            beforeCallback: $before ?: $defaultCallback,
            afterCallback: $after ?: $defaultCallback
        );

        return $this;
    }

    public function performBulkAction(callable $action, array $ids)
    {
    }
}
