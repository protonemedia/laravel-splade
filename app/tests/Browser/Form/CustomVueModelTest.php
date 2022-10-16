<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CustomVueModelTest extends DuskTestCase
{
    /** @test */
    public function it_submits_the_filled_elements()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/vmodel')
                ->waitForText('FormVueModel')
                ->type('@name', 'Name')
                ->type('@password', 'Password')
                ->attach('@file', __DIR__ . '/../small.jpeg')
                ->attach('@files', __DIR__ . '/../small.jpeg')
                ->attach('@files', __DIR__ . '/../small.png')
                ->type('@date', '2022-12-31')
                ->type('@time', '11:00AM')
                ->type('@biography', 'Biography')
                ->check('@options')
                ->radio('@language', 'nl')
                ->select('@country', 'NL')
                ->check('@terms')
                ->press('Submit')
                ->waitUntilMissingText('FormComponents')
                ->assertRouteIs('navigation.one');
        });
    }
}
