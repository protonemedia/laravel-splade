<?php

namespace Tests\Browser\Form;

use Faker\Provider\Lorem;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LibrariesTest extends DuskTestCase
{
    /** @test */
    public function it_can_autosize_the_textarea()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->type('textarea', Lorem::text(1000))
                ->assertAttributeContains('textarea', 'style', 'height');
        });
    }

    /** @test */
    public function it_can_use_the_choices_js_library_for_a_select_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->choicesSelect('country', 'NL')
                ->assertSee('Selected country: NL')
                ->choicesRemoveItem('country')
                ->assertDontSee('Selected country: NL');
        });
    }

    /** @test */
    public function it_can_use_the_choices_js_library_for_a_multiple_select_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->choicesSelect('countries[]', 'NL')
                ->assertSee('Selected countries: NL')
                ->choicesSelect('countries[]', 'BE')
                ->assertSee('Selected countries: NL, BE')
                ->choicesRemoveItem('countries[]', 'NL')
                ->assertSee('Selected countries: BE');
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_php_options_to_choices_js()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click("div.choices__inner[data-select-name='country1']")
                ->within('div.choices__list.is-active', function (Browser $browser) {
                    $browser->assertPresent('div[data-select-text="Please select!"]');
                });
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_js_options_to_choices_js()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click("div.choices__inner[data-select-name='country2']")
                ->within('div.choices__list.is-active', function (Browser $browser) {
                    $browser->assertPresent('div[data-select-text="Please select!"]');
                });
        });
    }

    /** @test */
    public function it_can_use_flatpickr_to_pick_a_date()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->click('input[name="date"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day.today')
                ->assertInputValue('date', now()->format('Y-m-d'));
        });
    }

    /** @test */
    public function it_can_use_flatpickr_to_pick_a_time()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->click('input[name="time"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-time .numInputWrapper:first-child .arrowUp')
                ->assertInputValue('time', '13:00');
        });
    }

    /** @test */
    public function it_can_use_flatpickr_to_pick_a_date_and_time()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->click('input[name="datetime"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day.today')
                ->click('.flatpickr-calendar.open .flatpickr-time .numInputWrapper:first-child .arrowUp')
                ->assertInputValue('datetime', now()->format('Y-m-d') . ' 13:00');
        });
    }

    /** @test */
    public function it_can_use_flatpickr_to_pick_a_date_range()
    {
        $this->browse(function (Browser $browser) {
            $firstDayOfMonth = now()->startOfMonth()->addDays(10)->format('F d, Y');
            $lastDayOfMonth  = now()->endOfMonth()->format('F d, Y');

            $browser->visit('form/components/libraries')
                ->waitForText('FormComponents')
                ->click('input[name="daterange"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day[aria-label="' . $firstDayOfMonth . '"]')
                ->click('.flatpickr-calendar.open .flatpickr-day[aria-label="' . $lastDayOfMonth . '"]')
                ->assertInputValue('daterange', now()->startOfMonth()->addDays(10)->format('Y-m-d') . ' to ' . now()->endOfMonth()->format('Y-m-d'));
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_php_options_to_flatpickr_through_the_date_attribute()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click('input[name="date1"]')
                ->waitFor('.flatpickr-calendar.open')
                ->assertSee(now()->format('F'))
                ->assertSee(now()->addMonth()->format('F'));
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_js_options_to_flatpickr_through_the_date_attribute()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click('input[name="date2"]')
                ->waitFor('.flatpickr-calendar.open')
                ->assertSee(now()->format('F'))
                ->assertSee(now()->addMonth()->format('F'));
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_php_options_to_flatpickr_through_the_time_attribute()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click('input[name="time1"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-time .numInputWrapper:first-child .arrowUp')
                ->assertInputValue('time1', '21:00');
        });
    }

    /** @test */
    public function it_can_provide_a_custom_set_of_js_options_to_flatpickr_through_the_time_attribute()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/custom')
                ->waitForText('FormComponents')
                ->click('input[name="time2"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-time .numInputWrapper:first-child .arrowUp')
                ->assertInputValue('time2', '21:00');
        });
    }
}
