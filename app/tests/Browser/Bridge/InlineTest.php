<?php

namespace Tests\Browser\Bridge;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class InlineTest extends DuskTestCase
{
    /** @test */
    public function it_supports_inline_templates()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/bridge/inline')
                ->waitForText('InlineDataTest')
                ->assertDontSeeIn('@ip', '.')
                ->type('hostname', 'google.com')
                ->press('Find IP')
                ->waitForText('.', '@ip');
        });
    }
}
