<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\View\Component;
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
        public SpladeTable $for,
        public bool $striped = false,
        public bool $headless = false,
        public string $scope = 'table',
        public ?int $searchDebounce = null,
    ) {
        $this->searchDebounce = is_null($searchDebounce)
            ? SpladeTable::getDefaultSearchDebounce()
            : $searchDebounce;
    }

    /**
     * Returns a boolean whether the paginator component should be visible.
     *
     * @return bool
     */
    public function showPaginator(): bool
    {
        if (SpladeTable::hidesPaginationWhenResourceContainsOnePage()) {
            return false;
        }

        return $this->for->resource instanceof Paginator
            || $this->for->resource instanceof CursorPaginator;
    }

    /**
     * Returns a boolean whether the resource is 'LengthAware'.
     *
     * @return bool
     */
    public function isLengthAware(): bool
    {
        return $this->for->resource instanceof LengthAwarePaginator;
    }

    /**
     * Returns a boolean whether the per-page selector has more than one option.
     *
     * @return bool
     */
    public function hasPerPageOptions(): bool
    {
        return count($this->for->allPerPageOptions()) > 1;
    }

    /**
     * Returns a boolean whether this table has 'controls', which are
     * the buttons and input elements above the table header.
     *
     * @return bool
     */
    public function hasControls(): bool
    {
        return $this->for->isSorted()
            || $this->for->page() > 1
            || $this->for->hasPerPageQuery()
            || $this->for->hasFilters()
            || $this->for->hasToggleableColumns()
            || $this->for->hasToggleableSearchInputs()
            || $this->for->searchInputs('global');
    }

    /**
     * Returns a boolean whether the 'reset' button should be visible.
     *
     * @return bool
     */
    public function canResetTable(): bool
    {
        return $this->for->isSorted()
            || $this->for->page() > 1
            || $this->for->hasPerPageQuery()
            || $this->for->hasFiltersEnabled()
            || $this->for->hasSearchFiltersEnabled();
    }

    /**
     * Transforms the current URL to sort by the given column and reset the current page.
     *
     * @param  \ProtoneMedia\Splade\Table\Column  $column
     * @return string
     */
    public function sortBy(Column $column): string
    {
        return request()->fullUrlWithQuery([
            'page' => null,
            'sort' => ($column->sorted === 'asc') ? "-{$column->key}" : $column->key,
        ]);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::table.table', [
            'table'          => $this->for,
            'wrapperName'    => SpladeComponent::normalize('table-wrapper'),
            'paginationView' => $this->isLengthAware() ? 'splade::table.pagination' : 'splade::table.simple-pagination',
        ]);
    }
}
