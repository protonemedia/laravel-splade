<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SelectRemoteTest extends DuskTestCase
{
    /** @test */
    public function it_can_load_options_from_a_key_value_source()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/keyValue')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->assertSelectMissingOption('country_a', '')    // placeholder
                ->assertSelectHasOption('country_c', '')    // placeholder
                ->select('@country_a', 'NL')
                ->choicesSelect('@country_b', 'BE')
                ->select('@country_c', 'FR')
                ->choicesSelect('@country_d', 'DE')

                ->select('@countries_a', ['NL'])
                ->choicesSelect('@countries_b', 'BE')
                ->select('@countries_c', ['FR'])
                ->choicesSelect('@countries_d', 'DE')

                ->press('Submit')
                ->waitForRoute('navigation.one');
        });
    }

    /** @test */
    public function it_can_load_options_from_an_array_of_objects()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/objects')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->assertSelectMissingOption('country_a', '')    // placeholder
                ->assertSelectHasOption('country_c', '')    // placeholder
                ->select('@country_a', 'NL')
                ->choicesSelect('@country_b', 'BE')
                ->select('@country_c', 'FR')
                ->choicesSelect('@country_d', 'DE')

                ->select('@countries_a', 'NL')
                ->choicesSelect('@countries_b', 'BE')
                ->select('@countries_c', 'FR')
                ->choicesSelect('@countries_d', 'DE')

                ->press('Submit')
                ->waitForRoute('navigation.one');
        });
    }
}
