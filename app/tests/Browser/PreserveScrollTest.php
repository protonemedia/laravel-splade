<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PreserveScrollTest extends DuskTestCase
{
    /** @test */
    public function it_can_preserve_to_scroll_props_on_navigation()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/preserveScroll/a');

            $scrollTop = $browser->script(
                "return document.querySelector('#scroll').scrollTop;"
            );

            $this->assertEquals([0 => 0], $scrollTop);

            $browser->script(
                "document.querySelector('#scroll').scrollTop = 50"
            );

            $browser
                ->pause(500)
                ->click('@to-b')
                ->waitForRoute('preserveScroll.b')
                ->pause(500);

            $scrollTop = $browser->script(
                "return document.querySelector('#scroll').scrollTop;"
            );

            $this->assertEquals([0 => 50], $scrollTop);
        });
    }
}
