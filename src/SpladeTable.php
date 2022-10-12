<?php

namespace ProtoneMedia\Splade;

use App\Tables\AbstractTable;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use ProtoneMedia\Splade\Table\HasBulkActions;
use ProtoneMedia\Splade\Table\HasColumns;
use ProtoneMedia\Splade\Table\HasExports;
use ProtoneMedia\Splade\Table\HasFilters;
use ProtoneMedia\Splade\Table\HasResource;
use ProtoneMedia\Splade\Table\HasSearchInputs;
use Spatie\QueryBuilder\QueryBuilder as SpatieQueryBuilder;

class SpladeTable
{
    use HasBulkActions;
    use HasColumns;
    use HasExports;
    use HasFilters;
    use HasResource;
    use HasSearchInputs;

    const DEFAULT_NAME = 'default';

    const GLOBAL_SEARCH_KEY = 'global';

    protected string $name;

    protected array $perPageOptions = [];

    protected string $defaultSort = '';

    protected Request $request;

    protected static array $defaultPerPageOptions = [15, 30, 50, 100];

    protected static int $defaultSearchDebounce = 350;

    protected static bool $hidePaginationWhenResourceContainsOnePage = false;

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

        $this->name(static::DEFAULT_NAME);

        if (static::$defaultGlobalSearch !== false) {
            $this->withGlobalSearch(static::$defaultGlobalSearch);
        }

        $this->perPageOptions(static::$defaultPerPageOptions);
    }

    /**
     * Helper method to create a new instance.
     *
     * @param  mixed  $resource
     * @return SpladeQueryBuilder|static
     */
    public static function for($resource): SpladeQueryBuilder|static
    {
        if (is_string($resource)) {
            $resource = app($resource);
        }

        if ($resource instanceof Model) {
            $resource = $resource->newQuery();
        }

        if ($resource instanceof Builder || $resource instanceof SpatieQueryBuilder) {
            return new SpladeQueryBuilder($resource);
        }

        return new static($resource);
    }

    /**
     * Sets the class that configurates this table.
     *
     * @param  AbstractTable  $configurator
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
            $this->name === static::DEFAULT_NAME ? $key : "{$this->name}_{$key}",
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
     * Returns a boolean whether the request query has a 'perPage' item.
     *
     * @return bool
     */
    public function hasPerPageQuery(): bool
    {
        return $this->query('perPage') !== null;
    }

    /**
     * Any action that should be performed before rendering the Table component.
     *
     * @return void
     */
    public function beforeRender()
    {
    }

    public function performBulkAction(callable $action, array $ids)
    {
    }
}
