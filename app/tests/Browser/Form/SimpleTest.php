<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SimpleTest extends DuskTestCase
{
    /** @test */
    public function it_shows_validation_errors_for_each_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/simple')
                ->waitForText('FormComponents')
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSee('The password field is required.')
                ->assertSee('The file field is required.')
                ->assertSee('The files field is required.')
                ->assertSee('The date field is required.')
                ->assertSee('The time field is required.')
                ->assertSee('The biography field is required.')
                ->assertSee('The options field is required.')
                ->assertSee('The language field is required.')
                ->assertSee('The terms field is required.');
        });
    }

    /** @test */
    public function it_submits_the_filled_elements()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/simple')
                ->waitForText('FormComponents')
                ->type('name', 'Name')
                ->type('password', 'Password')
                ->attach('file', __DIR__ . '/../small.jpeg')
                ->attach('files[]', __DIR__ . '/../small.jpeg')
                ->attach('files[]', __DIR__ . '/../small.png')
                ->type('date', '2022-12-31')
                ->type('time', '11:00AM')
                ->type('biography', 'Biography')
                ->check('options[]')
                ->radio('language', 'nl')
                ->select('country', 'NL')
                ->check('terms')
                ->press('Submit')
                ->waitUntilMissingText('FormComponents')
                ->assertRouteIs('navigation.one');
        });
    }
}
