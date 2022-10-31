<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DefaultsTest extends DuskTestCase
{
    /** @test */
    public function it_can_use_the_choices_library_by_default()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaults')
                ->waitForText('FormComponents')
                ->choicesSelect('country', 'NL')
                ->assertSee('Selected country: NL');
        });
    }

    /** @test */
    public function it_can_use_the_flatpickr_library_by_default_with_a_default_date_format()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaults')
                ->waitForText('FormComponents')
                ->click('input[name="date"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day.today')
                ->assertInputValue('date', now()->format('d-m-Y'));
        });
    }

    /** @test */
    public function it_can_use_the_flatpickr_library_by_default_with_a_default_time_format()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaults')
                ->waitForText('FormComponents')
                ->click('input[name="time"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-time .numInputWrapper:first-child .arrowUp')
                ->assertInputValue('time', '00:21');
        });
    }

    /** @test */
    public function it_can_select_the_default_option_when_the_options_attribute_is_not_used()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/customSelectOptions')
                ->waitForText('FormComponents')
                ->assertSelected('@select-regular', 'NL')
                ->assertSeeIn('div[data-select-name="country"] .choices__item--selectable', 'Netherlands');
        });
    }
}
