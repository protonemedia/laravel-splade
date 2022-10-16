<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SubmitOnChangeTest extends DuskTestCase
{
    /** @test */
    public function it_can_submit_the_form_by_watching_value_changes()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@form-all', function (Browser $browser) {
                    $browser->type('@name', 'Name');
                    $browser->waitForText('The email field is required.');
                    $browser->type('@email', 'e');
                    $browser->waitForText('The email must be a valid email address.');
                });
        });
    }

    /** @test */
    public function it_can_submit_the_form_by_watching_a_single_value_change()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@form-single', function (Browser $browser) {
                    $browser->type('@email', 'e');
                    $browser->pause(1500);
                    $browser->assertDontSee('The email must be a valid email address.');
                    $browser->type('@name', 'Name');
                    $browser->waitForText('The email must be a valid email address.');
                });
        });
    }

    /** @test */
    public function it_can_submit_the_form_by_watching_a_string_of_attributes()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@form-string', function (Browser $browser) {
                    $browser->type('@name', 'Name');
                    $browser->waitForText('The email field is required.');
                    $browser->type('@email', 'e');
                    $browser->waitForText('The email must be a valid email address.');
                });
        });
    }

    /** @test */
    public function it_can_submit_the_form_by_watching_an_array_of_attributes()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@form-array', function (Browser $browser) {
                    $browser->type('@name', 'Name');
                    $browser->waitForText('The email field is required.');
                    $browser->type('@email', 'e');
                    $browser->waitForText('The email must be a valid email address.');
                });
        });
    }
}
