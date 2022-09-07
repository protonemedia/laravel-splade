<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NestedFormController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'nested.name'     => ['required', 'string'],
            'nested.accepted' => ['required', 'boolean', 'accepted'],
        ]);

        return redirect()->route('navigation.one');
    }
}
