<?php

namespace App\Http\Controllers;

use ProtoneMedia\Splade\Facades\SEO;

class ModalController
{
    public function base()
    {
        SEO::title('Modal Base');

        return view('modal.base');
    }

    public function one()
    {
        SEO::title('Modal One');

        return view('modal.one', [
            'closeExplicitly' => (bool) request()->query('closeExplicitly'),
        ]);
    }

    public function two()
    {
        SEO::title('Modal Two');

        return view('modal.two');
    }

    public function slideover()
    {
        return view('modal.slideover');
    }

    public function validation()
    {
        return view('modal.validation');
    }

    public function keep()
    {
        return view('modal.keep');
    }

    public function opened()
    {
        return view('modal.opened');
    }

    public function size($size)
    {
        return view('modal.size', ['size' => $size]);
    }
}
