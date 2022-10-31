<?php

namespace Tests\Browser\Form;

use Faker\Provider\Lorem;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormLibrariesInModalTest extends DuskTestCase
{
    /** @test */
    public function it_can_autosize_the_textarea()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
                ->waitForText('FormComponents')
                ->type('textarea', Lorem::text(1000))
                ->assertAttributeContains('textarea', 'style', 'height');
        });
    }

    /** @test */
    public function it_can_use_the_choices_js_library_for_a_select_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
                ->waitForText('FormComponents')
                ->choicesSelect('country', 'NL')
                ->assertSee('Selected country: NL')
                ->choicesRemoveItem('country')
                ->assertDontSee('Selected country: NL');
        });
    }

    /** @test */
    public function it_can_use_the_choices_js_library_for_a_multiple_select_element_in_a_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
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
    public function it_can_close_the_choices_js_library_without_selecting_an_option()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@form-select')
                ->waitForText('FormComponents')
                ->click('@select-choices')
                ->whenAvailable('div.choices.is-open', function (Browser $browser) {
                    $coordinates = $browser->script("return document.querySelector('[dusk=\"text\"]').getBoundingClientRect()");

                    $browser->clickAtPoint($coordinates[0]['x'], $coordinates[0]['y'])
                        ->pause(500)
                        ->assertMissing('div.choices.is-open');
                });
        });
    }

    /** @test */
    public function it_can_use_flatpickr_to_pick_a_date()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
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
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
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
            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
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

            $browser->visit('modal/base')
                ->waitForText('ModalComponent')
                ->click('@libraries')
                ->waitForText('FormComponents')
                ->click('input[name="daterange"]')
                ->waitFor('.flatpickr-calendar.open')
                ->click('.flatpickr-calendar.open .flatpickr-day[aria-label="' . $firstDayOfMonth . '"]')
                ->click('.flatpickr-calendar.open .flatpickr-day[aria-label="' . $lastDayOfMonth . '"]')
                ->assertInputValue('daterange', now()->startOfMonth()->addDays(10)->format('Y-m-d') . ' to ' . now()->endOfMonth()->format('Y-m-d'));
        });
    }
}
