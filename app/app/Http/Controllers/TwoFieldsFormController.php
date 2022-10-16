<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TwoFieldsFormController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name'  => ['required'],
            'email' => ['required', 'email'],
        ]);

        return redirect()->back();
    }
}
