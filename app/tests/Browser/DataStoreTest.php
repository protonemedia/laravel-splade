<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DataStoreTest extends DuskTestCase
{
    /** @test */
    public function it_has_two_way_binding_for_multiple_data_sets()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/global-1')
                ->waitForText('DataGlobal1')
                ->within('@company', function (Browser $browser) {
                    $browser->type('input', 'Nike')
                        ->assertSeeIn('p', 'Nike');
                })
                ->within('@framework', function (Browser $browser) {
                    $browser->type('input', 'Tailwind')
                        ->assertSeeIn('p', 'Tailwind');
                });
        });
    }

    /** @test */
    public function it_can_have_multiple_default_data_sets()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/global-1')
                ->waitForText('DataGlobal1')
                ->within('@company', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Apple')
                        ->type('input', 'Nike')
                        ->assertSeeIn('p', 'Nike');
                })
                ->within('@framework', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Laravel')
                        ->type('input', 'Tailwind')
                        ->assertSeeIn('p', 'Tailwind');
                });
        });
    }

    /** @test */
    public function it_can_remember_the_state_of_the_data()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/data/global-1')
                ->waitForText('DataGlobal1')
                ->within('@company', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Apple')
                        ->type('input', 'Nike')
                        ->assertSeeIn('p', 'Nike');
                })
                ->within('@framework', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Laravel')
                        ->type('input', 'Tailwind')
                        ->assertSeeIn('p', 'Tailwind');
                })
                ->click('@global-2')
                ->waitForText('DataGlobal2')
                ->within('@company', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Apple');
                })
                ->within('@framework', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Tailwind');
                });
        });
    }

    /** @test */
    public function it_can_remember_the_state_of_the_data_in_local_storage()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/data/global-1')
                ->waitForText('DataGlobal1')
                ->within('@framework', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Laravel')
                        ->type('input', 'Tailwind')
                        ->assertSeeIn('p', 'Tailwind');
                })
                ->within('@project', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Splade')
                        ->type('input', 'FFmpeg')
                        ->assertSeeIn('p', 'FFmpeg');
                })
                ->visit('/data/binding')    // without Splade navigation
                ->waitForText('DataBinding')
                ->visit('/data/global-1') // without Splade navigation
                ->within('@company', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Apple');
                })
                ->within('@framework', function (Browser $browser) {
                    $browser->assertInputValue('input', 'Laravel');
                })
                ->within('@project', function (Browser $browser) {
                    $browser->assertInputValue('input', 'FFmpeg');
                });
        });
    }
}
