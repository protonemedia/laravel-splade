<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SubmitOnChangeTest extends DuskTestCase
{
    /** @test */
    public function it_can_submit_the_form_whenever_any_value_changes()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@all', function (Browser $browser) {
                    $browser->type('@name', 'Name');
                    $browser->waitForText('The email field is required.');
                    $browser->type('@email', 'e');
                    $browser->waitForText('The email must be a valid email address.');
                });
        });
    }

    /** @test */
    public function it_can_submit_the_form_whenever_one_value_changes()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/submitOnChange')
                ->waitForText('FormSubmitOnChange')
                ->within('@single', function (Browser $browser) {
                    // $browser->type('@name', 'Name');
                    // $browser->waitForText('The email field is required.');
                    // $browser->type('@email', 'e');
                    // $browser->waitForText('The email must be a valid email address.');
                });
        });
    }
}
