<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormDownloadController
{
    public function show(Request $request)
    {
        return view('form.download');
    }

    public function submit()
    {
        return response()->download(storage_path('test.pdf'));
    }
}
