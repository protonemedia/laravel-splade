<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use App\Tables\Projects;
use App\Tables\SpatieProjects;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\SpladeTable;

class TableController
{
    public function as(bool $spladeQueryBuilder = false)
    {
        $query = User::query()->orderBy('name');

        $resource = $spladeQueryBuilder ? $query : $query->paginate(10);

        $table = SpladeTable::for($resource)
            ->column('name')
            ->column('email', as: function ($email, $user) {
                if ($email === $user->email) {
                    return strrev($email);
                }
            });

        if ($spladeQueryBuilder) {
            $table->paginate(10);
        }

        return view('table.users', [
            'users' => $table,
        ]);
    }

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

    public function empty()
    {
        SpladeTable::hidePaginationWhenResourceContainsOnePage();

        return view('table.users', [
            'users' => SpladeTable::for(User::query()->where('id', '<', 1))
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

    public function relationsAndExports(bool $spatieQueryBuilder = false)
    {
        return view('table.projects', [
            'projects' => $spatieQueryBuilder ? SpatieProjects::class : Projects::class,
        ]);
    }

    public function preserveScrollForm()
    {
        return view('table.preserveScrollForm', [
            'projects' => SpladeTable::for(Project::class)
                ->defaultSort('name')
                ->column('name')
                ->column('action')
                ->paginate(100),
        ]);
    }

    public function preserveScrollFormSubmit()
    {
        $data = request()->validate([
            'id' => ['required', 'exists:projects'],
        ]);

        $project = Project::findOrFail($data['id']);

        $project->name = "updated-{$project->name}";
        $project->save();

        Toast::info('Project updated!');

        return redirect()->back();
    }

    public function modal()
    {
        return view('table.modal');
    }
}
