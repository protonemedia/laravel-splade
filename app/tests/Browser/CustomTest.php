<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CustomTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_use_a_custom_component()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/custom')
                ->waitForText('CustomVueComponent')
                ->press(1)
                ->assertSee(2);
        });
    }
}
