<?php

namespace App\Tables;

use App\Models\User;
use Illuminate\Support\Collection;
use ProtoneMedia\Splade\AbstractTable;
use ProtoneMedia\Splade\SpladeTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class SpatieUsers extends AbstractTable
{
    public function __construct(private string $paginateMethod)
    {
    }

    public function for()
    {
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query
                        ->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('email', 'LIKE', "%{$value}%");
                });
            });
        });

        return QueryBuilder::for(User::query())
            ->defaultSort('name')
            ->allowedSorts(['name', 'email', 'language_code'])
            ->allowedFilters(['name', 'email', 'language_code', $globalSearch]);
    }

    public function configure(SpladeTable $table)
    {
        $table
            ->withGlobalSearch()
            ->defaultSort('name')
            ->column(key: 'name', searchable: true, sortable: true, canBeHidden: false)
            ->column(key: 'email', searchable: true, sortable: true)
            ->column(key: 'language_code', label: 'Language')
            ->column(label: 'Actions')
            ->selectFilter(key: 'language_code', options: [
                'en' => 'English',
                'nl' => 'Dutch',
            ], label: 'Language')
            ->{$this->paginateMethod}(10);
    }
}
