<?php

namespace App\Http\Controllers;

use ProtoneMedia\Splade\Facades\Splade;

class LazyController
{
    public function __invoke()
    {
        return view('lazy', [
            'always' => 'always',
            'init'   => Splade::onInit('init'),
            'lazy'   => Splade::onLazy(fn () => sleep(1) ? null : ['key' => 'Hi from controller!']),
            'time'   => Splade::onLazy(fn () => sleep(1) ? null : now()->format('H:i:s')),
        ]);
    }
}
