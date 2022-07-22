<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FlashTest extends DuskTestCase
{
    /** @test */
    public function it_can_interact_with_flashed_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/flash/put')
                ->waitForRoute('flash')
                ->waitForText('FlashComponent')
                ->assertSee('This is a message')
                ->refresh()
                ->waitForText('FlashComponent')
                ->assertDontSee('This is a message');
        });
    }
}
