<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileFormController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'avatar' => ['required', 'image', 'dimensions:min_width=250,min_height=250'],
        ]);
    }
}
