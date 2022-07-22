<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class NavigationTest extends DuskTestCase
{
    /** @test */
    public function it_can_navigate_without_reloading_the_whole_page()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->tap(fn (Browser $browser) => $browser->script('document.body.classList.add("persistent")'))
                ->click('@two')
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')))
                ->click('@three')
                ->waitForText('NavigationThree')
                ->assertRouteIs('navigation.three')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')));
        });
    }

    /** @test */
    public function it_can_use_the_back_and_forward_buttons()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->tap(fn (Browser $browser) => $browser->script('document.body.classList.add("persistent")'))
                ->click('@two')
                ->waitForText('NavigationTwo')
                ->click('@three')
                ->waitForText('NavigationThree')
                ->back()
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')))
                ->back()
                ->waitForText('NavigationOne')
                ->assertRouteIs('navigation.one')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')))
                ->forward()
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')));
        });
    }

    /** @test */
    public function it_remembers_the_state_of_a_page()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/form')
                ->waitForText('NavigationForm')
                ->type('persistent', 'persistent')
                ->click('@two')
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two')
                ->back()
                ->waitForText('NavigationForm')
                ->assertInputValue('persistent', 'persistent');
        });
    }

    /** @test */
    public function it_can_ask_to_confirm()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@confirm')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-cancel')
                ->waitUntilMissingText('Are you sure you want to continue?')
                ->assertRouteIs('navigation.one')
                ->click('@confirm')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-confirm')
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two');
        });
    }

    /** @test */
    public function it_can_ask_to_confirm_with_custom_texts()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@confirm-custom')
                ->waitForText('Custom title')
                ->assertSee('Custom text')
                ->assertSeeIn('@splade-confirm-confirm', 'Yes')
                ->assertSeeIn('@splade-confirm-cancel', 'No');
        });
    }

    /** @test */
    public function it_shows_a_404_error()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->resize(1024, 768)
                ->waitForText('NavigationOne')
                ->click('@notFound')
                ->waitFor('iframe')
                ->withinFrame('iframe', function (Browser $browser) {
                    $browser->assertSee('NOT FOUND');
                })
                ->screenshot('NavigationNotFound')
                ->clickAtPoint(0, 0)
                ->waitUntilMissing('iframe')
                ->assertSee('NavigationOne')
                ->screenshot('NavigationErrorClickedAway');

            $this->assertScreenshotSnapshot([
                'NavigationNotFound',
                'NavigationErrorClickedAway',
            ]);
        });
    }

    /** @test */
    public function it_shows_a_500_error()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->resize(1024, 768)
                ->waitForText('NavigationOne')
                ->click('@serverError')
                ->waitFor('iframe')
                ->withinFrame('iframe', function (Browser $browser) {
                    $browser->assertSee('Whoops!');
                })
                ->screenshot('NavigationServerError');

            $this->assertScreenshotSnapshot('NavigationServerError');
        });
    }
}
