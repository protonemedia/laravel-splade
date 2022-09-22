<?php

namespace App\Http\Controllers;

use ProtoneMedia\Splade\Facades\Splade;

class LazyController
{
    public function show()
    {
        $sleep = request()->query('sleep', 1);

        return view('lazy', [
            'always' => 'always',
            'init'   => Splade::onInit('init'),
            'lazy'   => Splade::onLazy(fn () => sleep($sleep) ? null : ['key' => 'Hi from controller!']),
            'time'   => Splade::onLazy(fn () => sleep($sleep) ? null : now()->format('H:i:s')),
        ]);
    }

    public function notifications()
    {
        return view('notifications', [
            'notifications' => Splade::onLazy(fn () => sleep(1) ? null : ['Notification 1', 'Notification 2']),
        ]);
    }
}
