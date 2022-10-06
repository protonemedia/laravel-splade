<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DialogTest extends DuskTestCase
{
    /** @test */
    public function it_hides_the_dialog_on_navigation()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@open-dialog')
                ->click('@dialog-two')
                ->waitForText('NavigationTwo')
                ->assertMissing('@dialog-two')
                ->back()
                ->assertPresent('@dialog-two');
        });
    }
}
