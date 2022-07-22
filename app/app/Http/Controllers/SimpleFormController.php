<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SimpleFormController
{
    public function __invoke(Request $request)
    {
        $request->validate(['name' => ['required']]);

        return redirect()->route('form.simple');
    }
}
