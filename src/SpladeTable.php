<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Conditionable;
use InvalidArgumentException;
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
    use Conditionable;

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

    protected bool $resourceLoaded = false;

    /**
     * Creates a new instance.
     *
     * @param  mixed  $resource
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
     */
    public static function for($resource): SpladeQueryBuilder|static
    {
        if (is_string($resource)) {
            $resource = app($resource);
        }

        if ($resource instanceof Model) {
            $resource = $resource->newQuery();
        }

        if ($resource instanceof Relation) {
            $resource = $resource->getQuery();
        }

        if ($resource instanceof Builder || $resource instanceof SpatieQueryBuilder) {
            return new SpladeQueryBuilder($resource);
        }

        return new static($resource);
    }

    /**
     * Sets the class that configurates this table.
     *
     * @return $this
     */
    public function setConfigurator(AbstractTable $configurator): self
    {
        $this->configurator = $configurator;

        return $this;
    }

    /**
     * Retrieve a query string item from the request.
     *
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
     * @return $this
     */
    public function name(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Per Page options for this table.
     *
     * @return $this
     */
    public function perPageOptions(array $perPageOptions): self
    {
        $this->perPageOptions = $perPageOptions;

        return $this;
    }

    /**
     * Set a default for the per page options.
     *
     * @return void
     */
    public static function defaultPerPageOptions(array $perPageOptions)
    {
        static::$defaultPerPageOptions = $perPageOptions;
    }

    /**
     * Get the default debounce value.
     */
    public static function getDefaultSearchDebounce(): int
    {
        return static::$defaultSearchDebounce;
    }

    /**
     * Set a default debounce value.
     *
     * @return void
     */
    public static function defaultSearchDebounce(int $milliseconds)
    {
        static::$defaultSearchDebounce = max(0, $milliseconds);
    }

    /**
     * Getter for the 'hidePaginationWhenResourceContainsOnePage' setting.
     */
    public static function hidesPaginationWhenResourceContainsOnePage(): bool
    {
        return static::$hidePaginationWhenResourceContainsOnePage;
    }

    /**
     * Hides the pagination component when the resource contains one page.
     *
     * @return void
     */
    public static function hidePaginationWhenResourceContainsOnePage(bool $value = true)
    {
        static::$hidePaginationWhenResourceContainsOnePage = $value;
    }

    /**
     * Returns a boolean whether the data set should be sorted.
     */
    public function isSorted(): bool
    {
        return $this->query('sort') ? true : false;
    }

    /**
     * Resolves the current page from the request.
     */
    public function page(): int
    {
        return Paginator::resolveCurrentPage();
    }

    /**
     * Returns an array with all 'per page' amount options.
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
     * @return $this
     */
    public function defaultSort(string $sort, string $direction = ''): self
    {
        if ($direction && !in_array($direction, ['asc', 'desc'], true)) {
            throw new InvalidArgumentException('Direction must be "asc" or "desc".');
        }

        if (Str::startsWith($sort, '-')) {
            $sort      = Str::after($sort, '-');
            $direction = $direction ?: 'desc';
        }

        $this->defaultSort = $direction === 'desc' ? "-{$sort}" : $sort;

        return $this;
    }

    /**
     * Sets a descending default sort key
     *
     * @return $this
     */
    public function defaultSortDesc(string $sort): self
    {
        return $this->defaultSort($sort, 'desc');
    }

    /**
     * Returns the default sort key.
     */
    public function getDefaultSort(): string
    {
        return $this->defaultSort;
    }

    /**
     * Returns a boolean whether the request query has a 'perPage' item.
     */
    public function hasPerPageQuery(): bool
    {
        return $this->query('perPage') !== null;
    }

    /**
     * Any action that should be performed before rendering the Table component.
     */
    public function beforeRender(): self
    {
        return $this->loadResource()->resolveRowLinks();
    }

    /**
     * Any action that should be performed interacting with the resource.
     */
    public function loadResource(): self
    {
        if (!$this->resourceLoaded) {
            $this->resourceLoaded = true;
        }

        return $this;
    }

    public function performBulkAction(callable $action, array $ids)
    {
    }

    private function preventPaginationCall()
    {
        throw new PaginationException(
            'You should call the paginate-method on the resource, or pass a query builder as a resource so you can work with the Splade Query Builder.'
        );
    }

    public function paginate($perPage = null)
    {
        $this->preventPaginationCall();
    }

    public function simplePaginate($perPage = null)
    {
        $this->preventPaginationCall();
    }

    public function cursorPaginate($perPage = null)
    {
        $this->preventPaginationCall();
    }
}
