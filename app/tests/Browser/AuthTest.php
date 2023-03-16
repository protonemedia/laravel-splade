<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class AuthTest extends DuskTestCase
{
    /** @test */
    public function it_handles_the_login_redirect()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/two')
                ->waitForText('NavigationTwo')
                ->click('@auth')
                ->waitForRoute('navigation.one')
                ->assertSee('NavigationOne');
        });
    }
}
