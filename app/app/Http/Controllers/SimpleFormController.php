<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SimpleFormController
{
    public function __invoke(Request $request)
    {
        $request->validate(['name' => ['required']]);

        if ($request->query('password') && $request->input('password') !== 'password') {
            throw ValidationException::withMessages(['password' => 'The password is incorrect.']);
        }

        return redirect()->route('form.simple');
    }
}
