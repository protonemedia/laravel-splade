<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ErrorsTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_show_the_errors_from_the_session()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/errors')
                ->waitForText('ErrorsComponent')
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSee('The name field is required.');
        });
    }
}
