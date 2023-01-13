<?php

namespace App\Http\Controllers;

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

    public function infoRightCenter()
    {
        Toast::title('Info Right Center')
            ->message('This is a message')
            ->info()
            ->rightCenter();

        return view('toast');
    }

    public function infoCenter()
    {
        Toast::title('Info Center')
            ->message('This is a message')
            ->info()
            ->center();

        return view('toast');
    }

    public function infoLeftBottom()
    {
        Toast::title('Info Left Bottom')
            ->message('This is a message')
            ->info()
            ->leftBottom();

        return view('toast');
    }



    public function successLeftTop()
    {
        Toast::title('Success Left Top')
            ->success()
            ->leftTop();

        return view('toast');
    }

    public function successCenterTop()
    {
        Toast::title('Success Center Top')
            ->success()
            ->centerTop();

        return view('toast');
    }

    public function successRightTop()
    {
        Toast::title('Success Right Top')
            ->success()
            ->rightTop();

        return view('toast');
    }

    public function successLeftCenter()
    {
        Toast::title('Success Left Center')
            ->success()
            ->leftCenter();

        return view('toast');
    }

    public function successRightCenter()
    {
        Toast::title('Success Right Center')
            ->success()
            ->rightCenter();

        return view('toast');
    }

    public function successLeftBottom()
    {
        Toast::title('Success Left Bottom')
            ->success()
            ->leftBottom();

        return view('toast');
    }

    public function successCenterBottom()
    {
        Toast::title('Success Center Bottom')
            ->success()
            ->centerBottom();

        return view('toast');
    }

    public function successRightBottom()
    {
        Toast::title('Success Right Bottom')
            ->success()
            ->rightBottom();

        return view('toast');
    }



    public function warningLeftCenter()
    {
        Toast::title('Warning Left Center')
            ->leftCenter()
            ->warning();

        return view('toast');
    }

    public function warningCenterTop()
    {
        Toast::title('Warning Center Top')
            ->centerTop()
            ->warning();

        return view('toast');
    }

    public function warningRightTop()
    {
        Toast::title('Warning Right Top')
            ->rightTop()
            ->warning();

        return view('toast');
    }

    public function warningCenter()
    {
        Toast::title('Warning Center')
            ->center()
            ->warning();

        return view('toast');
    }

    public function warningLeftBottom()
    {
        Toast::title('Warning Left Bottom')
            ->leftBottom()
            ->warning();

        return view('toast');
    }

    public function warningCenterBottom()
    {
        Toast::title('Warning Center Bottom')
            ->centerBottom()
            ->warning();

        return view('toast');
    }

    public function warningRightBottom()
    {
        Toast::title('Warning Right Bottom')
            ->rightBottom()
            ->warning();

        return view('toast');
    }



    public function dangerLeftTop()
    {
        Toast::title('Danger Left Top')
            ->leftTop()
            ->danger();

        return view('toast');
    }

    public function dangerCenterTop()
    {
        Toast::title('Danger Center Top')
            ->centerTop()
            ->danger();

        return view('toast');
    }

    public function dangerRightTop()
    {
        Toast::title('Danger Right Top')
            ->rightTop()
            ->danger();

        return view('toast');
    }

    public function dangerLeftCenter()
    {
        Toast::title('Danger Left Center')
            ->leftCenter()
            ->danger();

        return view('toast');
    }

    public function dangerCenterBottom()
    {
        Toast::title('Danger Center Bottom')
            ->centerBottom()
            ->danger();

        return view('toast');
    }

    public function dangerCenter()
    {
        Toast::title('Danger Center')
            ->center()
            ->danger();

        return view('toast');
    }

    public function dangerRightCenter()
    {
        Toast::title('Danger Right Center')
            ->rightCenter()
            ->danger();

        return view('toast');
    }

    public function dangerRightBottom()
    {
        Toast::title('Danger Right Bottom')
            ->rightBottom()
            ->danger();

        return view('toast');
    }
}
