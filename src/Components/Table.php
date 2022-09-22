<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\View\Component;
use ProtoneMedia\Splade\SpladeTable;

class Table extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public SpladeTable $for, public bool $striped = false, public string $scope = 'table')
    {
    }

    public function isPaginated(): bool
    {
        return $this->for->resource instanceof Paginator
            || $this->for->resource instanceof CursorPaginator;
    }

    public function isLengthAware(): bool
    {
        return $this->for->resource instanceof LengthAwarePaginator;
    }

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

    public function canResetTable(): bool
    {
        return $this->for->isSorted()
            || $this->for->page() > 1
            || $this->for->hasPerPageQuery()
            || $this->for->hasFiltersEnabled()
            || $this->for->hasSearchFiltersEnabled();
    }

    public function sortBy($column): string
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
