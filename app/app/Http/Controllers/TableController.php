<?php

namespace App\Http\Controllers;

use App\Models\User;
use ProtoneMedia\Splade\Table;

class TableController
{
    public function users()
    {
        $users = User::query()->paginate(10);

        return view('table.users', [
            'users' => Table::for($users)
                ->column('name')
                ->column('email'),
        ]);
    }
}
