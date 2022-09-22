<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LazyTest extends DuskTestCase
{
    /** @test */
    public function it_can_lazily_load_content()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/lazy')
                ->waitForText('LazyComponent')
                ->assertSee('Placeholder 1')
                ->assertSee('Placeholder 2')
                ->waitForText('Lazy slot 1 : Hi from controller!')
                ->waitForText('Lazy slot 2 : Hi from controller!')
                ->press('Load time')
                ->assertSee('Want to see the time?')
                ->waitUntilMissingText('Want to see the time?')
                ->assertSee($time = now()->format('H:i'))
                ->press('Load time')
                ->assertDontSee($time)
                ->press('Load time')
                ->assertSee('Want to see the time?')
                ->waitUntilMissingText('Want to see the time?')
                ->assertSee(now()->format('H:i'));
        });
    }
}
