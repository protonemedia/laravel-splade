<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ProtoneMedia\Splade\Facades\SEO;

class NavigationController
{
    public function one()
    {
        SEO::title('Navigation One')
            ->description('First Navigation')
            ->keywords('een, one');

        return view('navigation.one');
    }

    public function two()
    {
        SEO::title('Navigation Two')
            ->description('Second Navigation')
            ->keywords(['twee', 'two']);

        return view('navigation.two');
    }

    public function three()
    {
        return view('navigation.three');
    }

    public function form()
    {
        return view('navigation.form');
    }

    public function videoOne()
    {
        return view('navigation.videoOne');
    }

    public function videoTwo()
    {
        return view('navigation.videoTwo');
    }

    public function post(Request $request)
    {
        $request->validate(['foo' => ['required', 'in:bar']]);

        abort_unless($request->header('X-Nav-Test') === 'test', 403);

        return redirect()->route('navigation.three');
    }

    public function put(Request $request)
    {
        $request->validate(['foo' => ['required', 'in:bar']]);

        abort_unless($request->header('X-Nav-Test') === 'test', 403);

        return redirect()->route('navigation.three');
    }
}
