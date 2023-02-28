<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormRedirectController
{
    public function show(Request $request)
    {
        return view('form.redirect');
    }

    public function submit()
    {
        return redirect()->route('form.simple')->withErrors([
            'name' => 'Custom validation message from redirect',
        ]);
    }
}
