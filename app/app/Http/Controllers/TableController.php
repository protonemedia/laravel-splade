<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Tables\Projects;
use ProtoneMedia\Splade\SpladeTable;

class TableController
{
    public function custom(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->column('name')
            ->column('email')
            ->column('actions');

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.custom', [
            'users' => $table,
        ]);
    }

    public function boolean(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->when(
            request()->query('filter'),
            function ($query, $filter) {
                $query->where('is_admin', $filter['is_admin']);
            }
        )->paginate(10);

        $table = SpladeTable::for($resource)
            ->column('name')
            ->column('is_admin')
            ->selectFilter('is_admin', [
                0 => 'No',
                1 => 'Yes',
            ]);

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.users', [
            'users' => $table,
        ]);
    }

    public function caseSensitive()
    {
        return view('table.users', [
            'users' => SpladeTable::for(User::query()->orderBy('name'))
                ->withGlobalSearch(columns: ['name'])
                ->column('name')
                ->ignoreCase(false)
                ->paginate(10),
        ]);
    }

    public function caseInsensitive()
    {
        return view('table.users', [
            'users' => SpladeTable::for(User::query()->orderBy('name'))
                ->withGlobalSearch(columns: ['name'])
                ->column('name')
                ->ignoreCase(true)
                ->paginate(10),
        ]);
    }

    public function overflow(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->paginate(1);

        $table = SpladeTable::for($resource)
            ->column('name')
            ->column('email')
            ->column('actions');

        if ($spladeQueryBuilder) {
            $table->paginate(1);
        }

        return view('table.overflow', [
            'users' => $table,
        ]);
    }

    public function noPerPage(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->column('name')
            ->column('email')
            ->column('actions');

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        SpladeTable::defaultPerPageOptions([10]);

        return view('table.users', [
            'users' => $table,
        ]);
    }

    public function rowLink(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->defaultSort('name')
            ->rowLink(fn (User $user) => route('navigation.one', ['id' => $user->id]))
            ->column('name')
            ->column('email')
            ->column('actions');

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.users', [
            'users' => $table,
        ]);
    }

    public function rowModal(bool $spladeQueryBuilder = false)
    {
        $query = User::query();

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->rowModal(fn () => route('modal.one'))
            ->column('name');

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.users', [
            'users' => $table,
        ]);
    }

    public function rowSlideover(bool $spladeQueryBuilder = false)
    {
        $query = User::query();

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->rowSlideover(fn () => route('modal.one'))
            ->column('name');

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.users', [
            'users' => $table,
        ]);
    }

    public function relationsAndExports()
    {
        return view('table.projects', [
            'projects' => Projects::class,
        ]);
    }
}
