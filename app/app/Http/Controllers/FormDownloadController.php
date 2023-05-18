<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormDownloadController
{
    public function show()
    {
        return view('form.download');
    }

    public function submit(Request $request)
    {
        $request->validate(['name' => 'required']);

        if ($request->input('name') === 'error') {
            abort(500, 'Explicit error');
        }

        return response()->download(storage_path('test.pdf'));
    }
}
