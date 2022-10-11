<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Tables\Projects;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\SpladeTable;

class TableController
{
    public function touch()
    {
        User::query()->whereKey(request()->input('ids'))->touch();

        Toast::info('The users are updated!');

        return redirect()->back();
    }

    public function custom()
    {
        $users = User::query()->orderBy('name')->paginate(10);

        return view('table.custom', [
            'users' => SpladeTable::for($users)
                ->column('name')
                ->column('email')
                ->column('actions'),
        ]);
    }

    public function overflow()
    {
        $users = User::query()->orderBy('name')->paginate(1);

        return view('table.overflow', [
            'users' => SpladeTable::for($users)
                ->column('name')
                ->column('email')
                ->column('actions'),
        ]);
    }

    public function noPerPage()
    {
        $users = User::query()->orderBy('name')->paginate(10);

        SpladeTable::defaultPerPageOptions([10]);

        return view('table.users', [
            'users' => SpladeTable::for($users)
                ->column('name')
                ->column('email')
                ->column('actions'),
        ]);
    }

    public function rowLink()
    {
        $users = User::query()->orderBy('name')->paginate(10);

        return view('table.users', [
            'users' => SpladeTable::for($users)
                ->defaultSort('name')
                ->rowLink(fn (User $user) => route('navigation.one', ['id' => $user->id]))
                ->column('name')
                ->column('email')
                ->column('actions'),
        ]);
    }

    public function relations()
    {
        return view('table.projects', [
            'projects' => Projects::class,
        ]);
    }
}
