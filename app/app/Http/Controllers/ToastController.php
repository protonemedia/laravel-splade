<?php

namespace App\Http\Controllers;

use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\Facades\Toast;

class ToastController
{
    public function infoLeftTop()
    {
        Toast::title('Info Left Top')->info()->leftTop();

        return view('toast');
    }

    public function infoCenterTop()
    {
        Toast::title('Info Center Top 1')->info()->centerTop();
        Toast::title('Info Center Top 2')->info()->centerTop();

        return view('toast');
    }

    public function infoRightTop()
    {
        Toast::title('Info Right Top')->info()->rightTop()->backdrop();

        return view('toast');
    }

    public function infoLeftCenter()
    {
        Toast::title('Info Left Center')
            ->message('This is a message')
            ->info()
            ->leftCenter();

        return view('toast');
    }

    public function successCenter()
    {
        Toast::title('Success Center')
            ->success()
            ->center();

        return view('toast');
    }

    public function warningRightCenter()
    {
        Toast::title('Warning Right Center')
            ->rightCenter()
            ->warning();

        return view('toast');
    }

    public function dangerLeftBottom()
    {
        Toast::title('Danger Left Bottom')
            ->leftBottom()
            ->danger();

        return view('toast');
    }

    public function infoCenterBottom()
    {
        Toast::title('Info Center Bottom')
            ->centerBottom()
            ->autoDismiss(3)
            ->info();

        return view('toast');
    }

    public function infoRightBottom()
    {
        Toast::title('Info Right Bottom')
            ->rightBottom()
            ->info();

        return view('toast');
    }

    public function twoLines()
    {
        Splade::toast("Line 1\nLine 2");

        return view('toast');
    }
}
