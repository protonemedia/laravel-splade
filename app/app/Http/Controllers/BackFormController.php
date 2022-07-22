<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BackFormController
{
    public function __invoke(Request $request)
    {
        $request->validate(['name' => ['required']]);

        return redirect()->back();
    }
}
