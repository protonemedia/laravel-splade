<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SlowFormController
{
    public function __invoke(Request $request)
    {
        sleep(1);

        return redirect()->back();
    }
}
