<?php

namespace App\Tables;

use App\Models\User;
use ProtoneMedia\Splade\AbstractTable;
use ProtoneMedia\Splade\SpladeTable;

class SpladeUsers extends AbstractTable
{
    public function __construct(private string $paginateMethod)
    {
    }

    public function for()
    {
        return User::query();
    }

    public function configure(SpladeTable $table)
    {
        $table
            ->withGlobalSearch(columns: ['name', 'email'])
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
