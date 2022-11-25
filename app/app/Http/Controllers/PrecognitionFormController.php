<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;

class PrecognitionFormController
{
    public function __invoke(CreateUserRequest $request)
    {
        dd($request->all());

        return redirect()->route('navigation.one');
    }
}
