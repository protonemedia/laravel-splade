<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class StateTest extends DuskTestCase
{
    /** @test */
    public function it_can_show_errors_and_flash_and_shared_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/state')
                ->waitForText('StateComponent')
                ->assertSee('This is shared')
                ->press('Submit')
                ->waitUntilMissing('This is shared')
                ->assertSee('Whoops!')
                ->assertSee('This is a message')
                ->assertSee('This is invalid');
        });
    }
}
