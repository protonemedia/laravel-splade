<?php

namespace Tests\Browser;

use Tests\Browser;
use Tests\DuskTestCase;

class EventBusTest extends DuskTestCase
{
    /** @test */
    public function it_can_subscribe_to_an_event_with_a_custom_script()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/emit')
                ->waitForText('FormEmit');

            $dynamicContent = $browser->getTextIn('@dynamic');

            $browser->type('name', 'test')
                ->press('Submit')
                ->waitUntilMissingText($dynamicContent)
                ->tap(fn (Browser $browser) => $this->assertStringContainsString('bg-confetti', $browser->element('#static')->getAttribute('class')));
        });
    }
}
