<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ComponentsTest extends DuskTestCase
{
    /** @test */
    public function it_can_render_multiple_checkboxes_with_an_options_array()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/checkboxes')
                ->waitForText('FormCheckboxes')
                ->assertChecked('countries[]', 'NL')
                ->assertChecked('countries[]', 'BE')
                ->assertNotChecked('countries[]', 'DE')
                ->press('Submit')
                ->waitForText('The countries must have at least 3 items.')
                ->check('countries[]', 'DE')
                ->press('Submit')
                ->waitUntilMissing('FormCheckboxes')
                ->assertRouteIs('navigation.one');
        });
    }

    /** @test */
    public function it_can_render_multiple_radios_with_an_options_array()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/radios')
                ->waitForText('FormRadios')
                ->assertRadioSelected('country', 'NL')
                ->press('Submit')
                ->waitUntilMissing('FormCheckboxes')
                ->assertRouteIs('navigation.one');
        });
    }
}
