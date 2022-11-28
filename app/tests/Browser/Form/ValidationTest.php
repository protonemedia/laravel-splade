<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ValidationTest extends DuskTestCase
{
    /** @test */
    public function it_escapes_the_validation_messages_by_default()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/components/validateMessage')
                ->waitForText('FormValidateMessage')
                ->press('Submit')
                ->waitForText('<a href="#">')
                ->assertSee('Here is a <a href="#">Link</a>');
        });
    }

    /** @test */
    public function it_can_disable_escaping_the_validation_messages()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/components/validateMessage?escape=no')
                ->waitForText('FormValidateMessage')
                ->press('Submit')
                ->waitForText('Here is a')
                ->assertSee('Link')
                ->assertDontSee('<a href="#">');
        });
    }
}
