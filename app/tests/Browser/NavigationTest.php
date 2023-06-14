<?php

namespace Tests\Browser;

use App\Models\User;
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
    public function it_can_navigate_with_a_hash()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@three-hash')
                ->waitForText('NavigationThree')
                ->assertRouteIs('navigation.three');

            $hash = $browser->script('return window.location.hash;');

            $this->assertEquals('#section', $hash[0]);
        });
    }

    /** @test */
    public function it_can_redirect_without_reloading_the_whole_page()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->tap(fn (Browser $browser) => $browser->script('document.body.classList.add("persistent")'))
                ->click('@redirectToTwo')
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two')
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('persistent', $browser->element('')->getAttribute('class')));
        });
    }

    /** @test */
    public function it_can_redirect_away_from_the_splade_spa()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@away')
                ->waitUntilMissingText('NavigationOne')
                ->assertUrlIs('https://splade.dev/');
        });
    }

    /** @test */
    public function it_can_redirect_away_from_the_splade_spa_with_a_helper_method()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@awayViaFacade')
                ->waitUntilMissingText('NavigationOne')
                ->assertUrlIs('https://splade.dev/');
        });
    }

    /** @test */
    public function it_can_redirect_away_from_the_splade_spa_with_the_link_component()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@awayViaLink')
                ->waitUntilMissingText('NavigationOne')
                ->assertUrlIs('https://splade.dev/');
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
    public function it_can_ask_to_confirm_with_a_password()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->logout()
                ->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@confirm-password')
                ->waitForText('Please confirm your password before continuing')
                ->press('@splade-confirm-confirm')
                ->waitForText('No user is logged in');

            $browser
                ->loginAs(User::firstOrFail())
                ->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@confirm-password')
                ->waitForText('Please confirm your password before continuing')
                ->type('password', 'password')
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
                ->pause(250)
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

    /** @test */
    public function it_can_use_a_blade_link_component()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@x-two')
                ->waitForText('NavigationTwo')
                ->assertRouteIs('navigation.two');
        });
    }

    /** @test */
    public function it_can_use_additional_attributes_on_a_blade_link_component()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/two')
                ->waitForText('NavigationTwo')
                ->click('@x-one')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-confirm')
                ->waitUntilMissingText('Are you sure you want to continue?')
                ->waitForText('NavigationOne')
                ->assertRouteIs('navigation.one');
        });
    }

    /** @test */
    public function it_can_use_the_link_component_to_post_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@x-post')
                ->waitForText('NavigationThree')
                ->assertRouteIs('navigation.three');
        });
    }

    /** @test */
    public function it_can_use_the_link_component_to_put_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@x-put')
                ->waitForText('NavigationThree')
                ->assertRouteIs('navigation.three');
        });
    }

    /** @test */
    public function it_adds_a_vary_header_so_switching_between_spa_and_non_spa_wont_break()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->click('@two')
                ->waitForText('NavigationTwo')
                ->screenshot('NavigationTwoWithSpa')
                ->click('@non-spa-one')
                ->waitForText('NavigationOne')
                ->back()
                ->waitForText('NavigationTwo')
                ->screenshot('NavigationTwoWithoutSpa');

            $this->assertFileEquals(
                __DIR__ . '/screenshots/NavigationTwoWithSpa.png',
                __DIR__ . '/screenshots/NavigationTwoWithoutSpa.png'
            );
        });
    }
}
