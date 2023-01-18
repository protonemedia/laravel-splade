<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ScriptTest extends DuskTestCase
{
    /** @test */
    public function it_can_use_a_custom_script()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/script')
                ->waitForText('ScriptComponent')
                ->waitForTextIn('#hey', 'Hello World!')
                ->assertSeeIn('#hey', 'Hello World!');
        });
    }
}
