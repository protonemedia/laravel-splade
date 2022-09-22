<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class TransitionTest extends DuskTestCase
{
    /** @test */
    public function it_can_add_custom_animations()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/transition/default')
                ->waitForText('TransitionDefault')
                ->press('Toggle')
                ->assertDontSee('Slot')
                ->waitForText('Slot')
                ->assertSee('Slot');
        });
    }
}
