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
                ->assertSeeIn('@static', $staticContent)
                ->pause(250);

            $newDynamicContent = $browser->getTextIn('@dynamic');
            $this->assertNotEquals($dynamicContent, $newDynamicContent);

            $browser->pause(1500)
                ->assertSeeIn('@static', $staticContent)
                ->pause(250);

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

    /** @test */
    public function it_can_rehydrate_two_sections_and_not_screw_up_the_progress_bar()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/rehydrate/twice')
                ->waitForText('RehydrateTwice');

            $staticContent   = $browser->getTextIn('@static');
            $dynamicContent1 = $browser->getTextIn('@dynamic-1');
            $dynamicContent2 = $browser->getTextIn('@dynamic-2');

            $browser
                ->assertSeeIn('@static', $staticContent)
                ->press('@reload')
                ->pause(1000)
                ->assertPresent('#nprogress')
                ->waitUntilMissing('#nprogress', 10);

            $this->assertNotEquals($dynamicContent1, $browser->getTextIn('@dynamic-1'));
            $this->assertNotEquals($dynamicContent2, $browser->getTextIn('@dynamic-2'));
        });
    }

    /** @test */
    public function it_can_rehydrate_and_keep_the_global_data_store_binding()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/data/nestedStore')
                ->waitForText('DataGlobal1')
                ->type('@name', 'Nike');

            $time = $browser->getTextIn('@time');

            $browser->pause(1250)
                ->press('Refresh')
                ->waitUntilMissingText($time)
                ->assertDontSee('@time', $time)
                ->assertValue('@name', 'Nike');
        });
    }
}
