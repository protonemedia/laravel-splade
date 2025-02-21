<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class TeleportTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_teleport_a_slot()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/teleport')
                ->waitForText('TeleportComponent')
                ->type('@name', 'Laravel Splade')
                ->assertSeeIn('#footer', 'Laravel Splade');
        });
    }
}
