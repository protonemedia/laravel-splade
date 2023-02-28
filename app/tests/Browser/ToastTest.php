<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ToastTest extends DuskTestCase
{
    /** @test */
    public function it_can_show_and_dimiss_a_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoLeftTop')
                ->resize(1024, 768)
                ->waitForText('Info Left Top')
                ->assertSee('Info Left Top')
                ->pause(500)
                ->screenshot('ToastInfoLeftTop')
                ->press('Dismiss Toast')
                ->waitUntilMissingText('Info Left Top')
                ->pause(500)
                ->screenshot('ToastDismissed');

            $this->assertScreenshotSnapshot(['ToastInfoLeftTop', 'ToastDismissed']);
        });
    }

    /** @test */
    public function it_can_show_two_toasts()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoCenterTop')
                ->resize(1024, 768)
                ->waitForText('Info Center Top 1')
                ->assertSee('Info Center Top 1')
                ->assertSee('Info Center Top 2')
                ->pause(500)
                ->screenshot('ToastInfoCenterTop')
                ->press('Dismiss Toast')
                ->waitUntilMissingText('Info Center Top 2')
                ->pause(500)
                ->screenshot('ToastDismissedTwo')
                ->press('Dismiss Toast')
                ->waitUntilMissingText('Info Center Top 1')
                ->pause(500)
                ->screenshot('ToastDismissedOne');

            $this->assertScreenshotSnapshot(['ToastInfoCenterTop', 'ToastDismissedTwo', 'ToastDismissedOne']);
        });
    }

    /** @test */
    public function it_can_show_a_toast_with_a_backdrop()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoRightTop')
                ->resize(1024, 768)
                ->waitForText('Info Right Top')
                ->assertSee('Info Right Top')
                ->pause(500)
                ->screenshot('ToastInfoRightTop')
                ->press('Dismiss Toast')
                ->waitUntilMissingText('Info Right Top')
                ->pause(500)
                ->screenshot('ToastDismissedWithBackdrop');

            $this->assertScreenshotSnapshot(['ToastInfoRightTop', 'ToastDismissedWithBackdrop']);
        });
    }

    /** @test */
    public function it_can_show_a_toast_with_a_message()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoLeftCenter')
                ->resize(1024, 768)
                ->waitForText('Info Left Center')
                ->assertSee('Info Left Center')
                ->assertSee('This is a message')
                ->pause(500)
                ->screenshot('ToastInfoLeftCenter');

            $this->assertScreenshotSnapshot('ToastInfoLeftCenter');
        });
    }

    /** @test */
    public function it_can_show_a_success_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/successCenter')
                ->resize(1024, 768)
                ->waitForText('Success Center')
                ->assertSee('Success Center')
                ->pause(500)
                ->screenshot('ToastSuccessCenter');

            $this->assertScreenshotSnapshot('ToastSuccessCenter');
        });
    }

    /** @test */
    public function it_can_show_a_warning_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/warningRightCenter')
                ->resize(1024, 768)
                ->waitForText('Warning Right Center')
                ->assertSee('Warning Right Center')
                ->pause(500)
                ->screenshot('ToastWarningRightCenter');

            $this->assertScreenshotSnapshot('ToastWarningRightCenter');
        });
    }

    /** @test */
    public function it_can_show_a_danger_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/dangerLeftBottom')
                ->resize(1024, 768)
                ->waitForText('Danger Left Bottom')
                ->assertSee('Danger Left Bottom')
                ->pause(500)
                ->screenshot('ToastDangerLeftBottom');

            $this->assertScreenshotSnapshot('ToastDangerLeftBottom');
        });
    }

    /** @test */
    public function it_can_show_a_center_bottom_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoCenterBottom')
                ->resize(1024, 768)
                ->waitForText('Info Center Bottom')
                ->assertSee('Info Center Bottom')
                ->pause(500)
                ->screenshot('ToastInfoCenterBottom')
                ->pause(3000)
                ->assertDontSee('Info Center Bottom')
                ->screenshot('ToastInfoCenterBottomAutoDismissed');

            $this->assertScreenshotSnapshot([
                'ToastInfoCenterBottom',
                'ToastInfoCenterBottomAutoDismissed',
            ]);
        });
    }

    /** @test */
    public function it_can_show_a_right_bottom_toast()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/infoRightBottom')
                ->resize(1024, 768)
                ->waitForText('Info Right Bottom')
                ->assertSee('Info Right Bottom')
                ->pause(500)
                ->screenshot('ToastInfoRightBottom');

            $this->assertScreenshotSnapshot('ToastInfoRightBottom');
        });
    }

    /** @test */
    public function it_can_show_a_toast_with_two_lines()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toast/twoLines')
                ->resize(1024, 768)
                ->waitForText('Line 1')
                ->within('h3', function ($toast) {
                    $toast->assertSee('Line 1')
                        ->assertSee('Line 2')
                        ->assertPresent('br');
                });
        });
    }
}
