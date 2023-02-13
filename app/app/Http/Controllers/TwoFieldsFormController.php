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

        if ($request->query('redirect')) {
            return redirect()->route('form.simple');
        }

        return redirect()->back();
    }
}
