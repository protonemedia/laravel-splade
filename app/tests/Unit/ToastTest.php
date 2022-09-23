<?php

namespace Tests\Unit;

use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\SpladeToast;
use Tests\TestCase;

class ToastTest extends TestCase
{
    /** @test */
    public function it_can_set_a_default_toast()
    {
        $toastA = Splade::toast('Message A')->toArray();

        $this->assertEquals('Message A', $toastA['message']);
        $this->assertEquals('success', $toastA['style']);
        $this->assertEquals('right', $toastA['positionX']);
        $this->assertEquals('top', $toastA['positionY']);

        Splade::defaultToast(function (SpladeToast $toast) {
            $toast->warning()->message('Hey!')->leftBottom()->autoDismiss(5);
        });

        $toastB = Splade::toast()->toArray();

        $this->assertEquals('Hey!', $toastB['message']);
        $this->assertEquals('warning', $toastB['style']);
        $this->assertEquals('left', $toastB['positionX']);
        $this->assertEquals('bottom', $toastB['positionY']);

        $toastC = Splade::toast('Custom message')->toArray();

        $this->assertEquals('Custom message', $toastC['message']);
    }
}
