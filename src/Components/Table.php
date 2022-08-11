<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Table as SpladeTable;

class Table extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public SpladeTable $for, public string $scope = 'table')
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
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return view('splade::table.table', [
            'table'          => $this->for,
            'wrapperName'    => $prefix . 'table-wrapper',
            'paginationView' => $this->isLengthAware() ? 'splade::table.pagination' : 'splade::table.simple-pagination',
        ]);
    }
}
