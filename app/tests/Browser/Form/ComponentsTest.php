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

    /** @test */
    public function it_can_change_the_value_of_a_checkbox_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/checkbox')
                ->waitForText('FormCheckbox')
                ->assertNotChecked('check_0')
                ->assertChecked('check_1')
                ->assertNotChecked('check_false')
                ->assertChecked('check_true')
                ->assertNotChecked('check_0_diff_false')
                ->assertChecked('check_1_diff_false')
                ->assertNotChecked('check_false_diff_false')
                ->assertChecked('check_true_diff_false');

            $checkboxes = [
                'check_0',
                'check_1',
                'check_false',
                'check_true',
                'check_0_diff_false',
                'check_1_diff_false',
                'check_false_diff_false',
                'check_true_diff_false',
            ];

            // uncheck everything
            foreach ($checkboxes as $field) {
                $browser->check($field);
                $browser->uncheck($field);
            }

            $browser->assertSeeIn('@all', '{ "check_0": false, "check_1": false, "check_false": false, "check_true": false, "check_0_diff_false": "no", "check_1_diff_false": "no", "check_false_diff_false": "no", "check_true_diff_false": "no" }');

            // check everything
            foreach ($checkboxes as $field) {
                $browser->check($field);
            }

            $browser->assertSeeIn('@all', '{ "check_0": "1", "check_1": "1", "check_false": true, "check_true": true, "check_0_diff_false": "1", "check_1_diff_false": "1", "check_false_diff_false": true, "check_true_diff_false": true }');
        });
    }
}
