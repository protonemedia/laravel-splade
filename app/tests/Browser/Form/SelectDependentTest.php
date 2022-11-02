<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SelectDependentTest extends DuskTestCase
{
    /** @test */
    public function it_restores_the_placeholder_on_regular_selects()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/dependent')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-regular', function (Browser $browser) {
                    $browser->select('@province', 'BE-VAN')
                        ->select('@country', 'NL')
                        ->waitUntilMissing('svg')
                        ->assertSeeIn('@all', '{ "country": "NL", "province": "" }')
                        ->assertSelectHasOption('@province', '')
                        ->select('@province', 'NL-DR')
                        ->assertSeeIn('@all', '{ "country": "NL", "province": "NL-DR" }');
                });
        });
    }

    /** @test */
    public function it_restores_the_placeholder_on_choices_instances()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/dependent')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-choices', function (Browser $browser) {
                    $browser->choicesSelect('@province', 'BE-VAN')
                        ->choicesSelect('@country', 'NL')
                        ->waitUntilMissing('svg')
                        ->assertSeeIn('@all', '{ "country": "NL", "province": "" }')
                        ->within('@province', function (Browser $browser) {
                            $browser->assertSeeIn('div.choices__item.choices__placeholder', 'Pick a region');
                        })
                        ->choicesSelect('@province', 'NL-DR')
                        ->assertSeeIn('@all', '{ "country": "NL", "province": "NL-DR" }');
                });
        });
    }

    /** @test */
    public function it_restores_the_placeholder_on_regular_multiple_select()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/dependent')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-multiple-regular', function (Browser $browser) {
                    $browser->select('@provinces', ['BE-VAN', 'BE-WBR'])
                        ->select('@country', 'NL')
                        ->waitUntilMissing('svg')
                        ->assertSeeIn('@all', '{ "country": "NL", "provinces": [] }')
                        ->assertSelectHasOption('@provinces', '')
                        ->select('@provinces', ['NL-CW', 'NL-DR'])
                        ->assertSeeIn('@all', '{ "country": "NL", "provinces": [ "NL-CW", "NL-DR" ] }');
                });
        });
    }

    /** @test */
    public function it_restores_the_placeholder_on_choices_multiple_select()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectAsync/dependent')
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-multiple-choices', function (Browser $browser) {
                    $browser->choicesSelect('@provinces', ['BE-VAN', 'BE-WBR'])
                        ->choicesSelect('@country', 'NL')
                        ->waitUntilMissing('svg')
                        ->assertSeeIn('@all', '{ "country": "NL", "provinces": [] }')
                        ->within('@provinces', function (Browser $browser) {
                            $browser->assertPresent('input.choices__input[placeholder="Pick a region"]');
                        })
                        ->choicesSelect('@provinces', ['NL-CW', 'NL-DR'])
                        ->choicesRemoveItem('@provinces', ['NL-CW', 'NL-DR'])
                        ->choicesSelect('@provinces', ['NL-CW', 'NL-DR'])
                        ->assertSeeIn('@all', '{ "country": "NL", "provinces": [ "NL-CW", "NL-DR" ] }');
                });
        });
    }
}
