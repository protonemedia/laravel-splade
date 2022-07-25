<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DataTest extends DuskTestCase
{
    /** @test */
    public function it_has_two_way_binding()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/binding')
                ->waitForText('DataBinding')
                ->type('name', 'Splade')
                ->assertSeeIn('@text', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_data_set()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/default')
                ->waitForText('DataDefault')
                ->assertInputValue('name', 'Splade')
                ->assertChecked('is_project')
                ->assertSee('Is Project!')
                ->type('name', 'Protone Media')
                ->uncheck('is_project')
                ->assertSeeIn('@text', 'Protone Media')
                ->assertDontSee('Is Project!');
        });
    }

    /** @test */
    public function it_can_bind_an_eloquent_model()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/eloquent')
                ->waitForText('DataEloquent')
                ->assertInputValue('name', 'Pascal');
        });
    }

    /** @test */
    public function it_can_remember_the_state_of_the_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/remember')
                ->waitForText('DataRemember')
                ->check('checkbox')
                ->click('@binding')
                ->waitForText('DataBinding')
                ->assertRouteIs('data.binding')
                ->click('@remember')
                ->waitForText('DataRemember')
                ->assertRouteIs('data.remember')
                ->assertChecked('checkbox');
        });
    }

    /** @test */
    public function it_can_remember_the_state_of_the_data_with_a_default_dataset()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/rememberWithDefault')
                ->waitForText('DataRememberWithDefault')
                ->assertChecked('checkbox')
                ->uncheck('checkbox')
                ->click('@binding')
                ->waitForText('DataBinding')
                ->assertRouteIs('data.binding')
                ->click('@rememberWithDefault')
                ->waitForText('DataRememberWithDefault')
                ->assertRouteIs('data.rememberWithDefault')
                ->assertNotChecked('checkbox');
        });
    }

    /** @test */
    public function it_can_remember_the_state_of_the_data_in_local_storage()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/localStorage')
                ->waitForText('DataRemember')
                ->check('checkbox')
                ->visit('/data/binding')    // without Splade navigation
                ->waitForText('DataBinding')
                ->visit('/data/localStorage')    // without Splade navigation
                ->waitForText('DataRemember')
                ->assertChecked('checkbox');
        });
    }
}
