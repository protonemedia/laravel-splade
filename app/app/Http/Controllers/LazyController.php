<?php

namespace App\Http\Controllers;

use ProtoneMedia\Splade\Facades\Splade;

class LazyController
{
    public function __invoke()
    {
        return view('lazy', [
            'always' => 'always',
            'first'  => Splade::first(fn () => 'first'),
            'lazy'   => Splade::lazy(fn () => ['key' => 'lazy']),
        ]);
    }
}
