<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PersistentLayoutTest extends DuskTestCase
{
    /** @test */
    public function it_can_navigate_without_reloading_the_layout()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/video/one')
                ->waitForText('Chapter one')
                ->assertScript('return document.querySelector("video").paused', true)
                ->tap(fn ($browser) => $browser->script('document.querySelector("video").play()'))
                ->pause(500)
                ->assertScript('return document.querySelector("video").paused', false)
                ->click('@two')
                ->waitForText('Chapter two')
                ->pause(500)
                ->assertScript('return document.querySelector("video").paused', false);
        });
    }
}
