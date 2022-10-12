<?php

namespace ProtoneMedia\Splade\Table;

use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

trait HasResource
{
    public $resource = [];

    public Collection $rowLinks;

    protected string $primaryKey = '';

    /**
     * Setter for the row-link callable that will be called for
     * every row in the data set to determine the target URL.
     *
     * @param  callable  $callback
     * @return $this
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

        throw new Exception('No primary key configured');
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
}