<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\View\Component;
use ProtoneMedia\Splade\AbstractTable;
use ProtoneMedia\Splade\SpladeTable;
use ProtoneMedia\Splade\Table\Column;

class Table extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public SpladeTable|AbstractTable|string $for,
        public bool $striped = false,
        public bool $headless = false,
        public string $scope = 'table',
        public ?int $searchDebounce = null,
    ) {
        $for = is_string($for) ? app($for) : $for;

        $this->for = $for instanceof AbstractTable
            ? $for->make()
            : $for;

        $this->searchDebounce = is_null($searchDebounce)
            ? SpladeTable::getDefaultSearchDebounce()
            : $searchDebounce;
    }

    /**
     * Returns a boolean whether the paginator component should be visible.
     */
    public function showPaginator(): bool
    {
        $resource = $this->for->resource;

        $paginator = $resource instanceof Paginator || $resource instanceof CursorPaginator;

        if (!$paginator) {
            return false;
        }

        if ($resource->isEmpty()) {
            return false;
        }

        return SpladeTable::hidesPaginationWhenResourceContainsOnePage()
            ? $resource->hasPages()
            : true;
    }

    /**
     * Returns a boolean whether the resource is 'LengthAware'.
     */
    public function isLengthAware(): bool
    {
        return $this->for->resource instanceof LengthAwarePaginator;
    }

    /**
     * Returns a boolean whether the per-page selector has more than one option.
     */
    public function hasPerPageOptions(): bool
    {
        return count($this->for->allPerPageOptions()) > 1;
    }

    /**
     * Returns a boolean whether this table has 'controls', which are
     * the buttons and input elements above the table header.
     */
    public function hasControls(): bool
    {
        return $this->for->hasBulkActions()
            || $this->for->hasFilters()
            || $this->for->hasPerPageQuery()
            || $this->for->hasToggleableColumns()
            || $this->for->hasToggleableSearchInputs()
            || $this->for->isSorted()
            || $this->for->page() > 1
            || $this->for->searchInputs('global');
    }

    /**
     * Returns a boolean whether the 'reset' button should be visible.
     */
    public function canResetTable(): bool
    {
        return $this->for->hasFiltersEnabled()
            || $this->for->hasPerPageQuery()
            || $this->for->hasSearchFiltersEnabled()
            || $this->for->isSorted()
            || $this->for->page() > 1;
    }

    /**
     * Transforms the current URL to sort by the given column and reset the current page.
     */
    public function sortBy(Column $column): string
    {
        return request()->fullUrlWithQuery([
            'page' => null,
            'sort' => ($column->sorted === 'asc') ? "-{$column->key}" : $column->key,
        ]);
    }

    /**
     * It gets thet data from the given item, based on the column
     * and whether that column is based on a relationship
     * Supports returning multiple items as well.
     *
     * @param  mixed  $item
     * @return mixed
     */
    public function getColumnDataFromItem($item, Column $column)
    {
        $value = $column->getDataFromItem($item);

        if (is_callable($as = $column->as)) {
            return call_user_func($as, $value, $item);
        }

        return $value;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::table.table', [
            'table'          => tap($this->for)->beforeRender(),
            'wrapperName'    => SpladeComponent::normalize('table-wrapper'),
            'paginationView' => $this->isLengthAware() ? 'splade::table.pagination' : 'splade::table.simple-pagination',
        ]);
    }
}
