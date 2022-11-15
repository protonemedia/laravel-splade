<?php

namespace ProtoneMedia\Splade\Table;

use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

trait HasResource
{
    public $resource = [];

    public $rowLinkCallable;

    public Collection $rowLinks;

    public string $rowLinkType = '';

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
        $this->rowLinkCallable = $callback;

        $this->rowLinkType = 'link';

        return $this;
    }

    protected function resolveRowLinks()
    {
        if (!$this->rowLinkCallable) {
            return;
        }

        $collection = $this->resource instanceof LengthAwarePaginator
            ? $this->resource->items()
            : $this->resource;

        $this->rowLinks = Collection::make($collection)->map($this->rowLinkCallable);
    }

    /**
     * Same as rowLink() but it opens in a Modal.
     *
     * @param  callable  $callback
     * @return self
     */
    public function rowModal(callable $callback): self
    {
        return tap($this->rowLink($callback), function () {
            $this->rowLinkType = 'modal';
        });
    }

    /**
     * Same as rowLink() but it open in a Slideover.
     *
     * @param  callable  $callback
     * @return self
     */
    public function rowSlideover(callable $callback): self
    {
        return tap($this->rowLink($callback), function () {
            $this->rowLinkType = 'slideover';
        });
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
     * Determine how many items there are on the current page.
     *
     * @return int
     */
    public function totalOnThisPage()
    {
        if ($this->resource instanceof LengthAwarePaginator) {
            return count($this->resource->items());
        }

        return count($this->resource);
    }

    /**
     * Determine how many items there all on all pages.
     *
     * @return int
     */
    public function totalOnAllPages()
    {
        if ($this->resource instanceof LengthAwarePaginator) {
            return $this->resource->total();
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
