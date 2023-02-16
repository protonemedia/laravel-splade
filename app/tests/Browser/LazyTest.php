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

    /** @test */
    public function it_can_resolve_an_external_url()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/lazy?sleep=0')
                ->waitForText('LazyComponent')
                ->press('Load notifications')
                ->assertSee('Loading notifications...')
                ->waitUntilMissingText('Loading notifications..')
                ->assertSee('Notification 1')
                ->assertSee('Notification 2')

                // assert other components are mounted as well:
                ->click('input[name="date"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day.today')
                ->assertInputValue('date', now()->format('Y-m-d'));
        });
    }

    /** @test */
    public function it_binds_the_lazy_loaded_content_to_the_global_data_store()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/lazy/nested')
                ->waitForText('LazyNested')
                ->type('@company-input', 'Nike')
                ->assertSeeIn('@company-label', 'Nike')
                ->type('@user-input', 'Pascal')
                ->assertSeeIn('@user-label', 'Pascal');
        });
    }
}
