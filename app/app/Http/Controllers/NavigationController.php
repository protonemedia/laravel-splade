<?php

namespace App\Http\Controllers;

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
}
