<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SelectDependentTest extends DuskTestCase
{
    public function dependentUrls()
    {
        return [
            ['form/components/selectAsync/dependent'],
            ['form/components/selectAsync/nested'],
        ];
    }

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_restores_the_placeholder_on_regular_selects($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
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

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_restores_the_placeholder_on_choices_instances($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
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

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_restores_the_placeholder_on_regular_multiple_select($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
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

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_restores_the_placeholder_on_choices_multiple_select($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
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

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_can_select_the_first_remote_option($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-first', function (Browser $browser) {
                    $browser
                       ->waitUntilMissing('svg')
                       ->assertSeeIn('@all', '{ "country": "BE", "province": "BE-VAN" }')
                       ->select('@country', 'NL')
                       ->waitUntilMissing('svg')
                       ->assertSeeIn('@all', '{ "country": "NL", "province": "NL-AW" }');
                });
        });
    }

    /**
     * @dataProvider dependentUrls
     *
     * @test
     */
    public function it_can_reset_the_select_option_on_a_remote_url_change($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
                ->waitForText('FormComponents')
                ->waitUntilMissing('svg')
                ->within('@select-reset', function (Browser $browser) {
                    $browser
                       ->waitUntilMissing('svg')
                       ->select('@province', 'BE-VAN')
                       ->assertSeeIn('@all', '{ "country": "BE", "province": "BE-VAN" }')
                       ->select('@country', 'NL')
                       ->waitUntilMissing('svg')
                       ->assertSeeIn('@all', '{ "country": "NL", "province": "" }');
                });
        });
    }
}
