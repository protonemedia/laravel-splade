<?php

namespace App\Http\Controllers;

class FormViewController
{
    public function __invoke()
    {
        return view('navigation.one');
    }
}
