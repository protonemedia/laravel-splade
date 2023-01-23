<?php

namespace Tests\Browser;

use Tests\Browser;
use Tests\DuskTestCase;

class RehydrateTest extends DuskTestCase
{
    /** @test */
    public function it_can_rehydrate_by_polling()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/rehydrate/poll')
                ->waitForText('RehydratePoll');

            $staticContent  = $browser->getTextIn('@static');
            $dynamicContent = $browser->getTextIn('@dynamic');

            $browser->pause(1500)
                ->assertSeeIn('@static', $staticContent);

            $newDynamicContent = $browser->getTextIn('@dynamic');
            $this->assertNotEquals($dynamicContent, $newDynamicContent);

            $browser->pause(1500)
                ->assertSeeIn('@static', $staticContent);

            $newerDynamicContent = $browser->getTextIn('@dynamic');
            $this->assertNotEquals($dynamicContent, $newerDynamicContent);
            $this->assertNotEquals($newDynamicContent, $newerDynamicContent);
        });
    }

    /** @test */
    public function it_can_rehydrate_a_section_after_submitting_a_form()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/emit')
                ->waitForText('FormEmit');

            $staticContent  = $browser->getTextIn('@static');
            $dynamicContent = $browser->getTextIn('@dynamic');

            $browser->type('name', 'test')
                ->press('Submit')
                ->waitUntilMissingText($dynamicContent)
                ->assertSeeIn('@static', $staticContent);

            $newDynamicContent = $browser->getTextIn('@dynamic');

            $this->assertNotEquals($dynamicContent, $newDynamicContent);
        });
    }
}
