<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PreloadedModalTest extends DuskTestCase
{
    /** @test */
    public function it_can_show_a_preloaded_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@menu-modal')
                ->waitForText('Check out my modal!');

            $width = $browser->script("return document.querySelector('body [dusk=\"modal-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals(672, $width);

            $browser
                ->pause(500)
                ->click('@close-modal-button')
                ->pause(500)
                ->waitUntilMissingText('Check out my modal!');
        });
    }

    /** @test */
    public function it_can_show_a_preloaded_modal_without_a_trigger()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/opened')
                ->resize(1680, 900)
                ->waitForText('ModalComponentOpened')
                ->waitForText('Check out my modal!')
                ->pause(500)
                ->click('@close-modal-button')
                ->pause(500)
                ->waitUntilMissingText('Check out my modal!');
        });
    }

    /** @test */
    public function it_can_show_a_preloaded_slideover()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@menu-slideover')
                ->waitForText('Check out my slideover!');

            $width = $browser->script("return document.querySelector('body [dusk=\"slideover-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals(448, $width);

            $browser
                ->pause(500)
                ->keys('', ['{escape}'])
                ->pause(500)
                ->waitUntilMissingText('Check out my slideover!');
        });
    }

    /** @test */
    public function it_can_show_a_large_preloaded_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@menu-modal-large')
                ->waitForText('Check out my modal!');

            $width = $browser->script("return document.querySelector('body [dusk=\"modal-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals(1280, $width);

            $browser
                ->pause(500)
                ->click('@close-modal-button')
                ->pause(500)
                ->waitUntilMissingText('Check out my modal!');
        });
    }

    /** @test */
    public function it_can_disable_closing_the_model_implicitly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@menu-modal-large')
                ->waitForText('Check out my modal!')
                ->pause(500)
                ->keys('', ['{escape}'])
                ->pause(500)
                ->assertSee('Check out my modal!')
                ->click('@close-modal-button')
                ->pause(500)
                ->waitUntilMissingText('Check out my modal!');
        });
    }

    /** @test */
    public function it_can_show_a_large_preloaded_slideover()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@menu-slideover-large')
                ->waitForText('Check out my slideover!');

            $width = $browser->script("return document.querySelector('body [dusk=\"slideover-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals(1280, $width);

            $browser
                ->pause(500)
                ->click('@close-modal-button')
                ->pause(500)
                ->waitUntilMissingText('Check out my slideover!');
        });
    }
}
