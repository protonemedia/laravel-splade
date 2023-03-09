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
    public function it_loads_the_data_from_a_dynamic_url()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer/url')
                ->waitForText('ComponentDeferUrl')
                ->type('@name', 'splade')
                ->waitForTextIn('@response', '{ "input": "splade" }');
        });
    }

    /** @test */
    public function it_can_use_the_poll_attribute_to_poll_for_new_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer/poll')
                ->waitForText('ComponentDefer')
                ->assertSee('Loading...')
                ->waitForTextIn('@response', 1)
                ->waitForTextIn('@response', 2)
                ->waitForTextIn('@response', 3);
        });
    }

    /** @test */
    public function it_can_manually_wait_for_a_watched_value_to_change()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/defer/watch')
                ->waitForText('ComponentDefer')
                ->assertDontSee('Loading...')
                ->type('@name', 'load1')
                ->waitForTextIn('@response', 1)
                ->type('@name', 'load2')
                ->waitForTextIn('@response', 2);
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
