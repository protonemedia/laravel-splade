<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DeferTest extends DuskTestCase
{
    /** @test */
    public function it_loads_the_data_from_the_api()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer')
                ->waitForText('ComponentDefer')
                ->assertSee('Loading...')
                ->waitForText('eno')
                ->assertDontSee('Loading...');
        });
    }

    /** @test */
    public function it_can_reload_the_request()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer')
                ->waitForText('eno')
                ->press('@reload')
                ->assertSee('Loading...')
                ->waitForText('owt');
        });
    }

    /** @test */
    public function it_can_use_the_request_attribute_with_a_javascript_object()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer/requestAttribute')
                ->waitForText('ComponentDefer')
                ->assertSee('Loading...')
                ->waitForText('eno')
                ->assertDontSee('Loading...');
        });
    }
}
