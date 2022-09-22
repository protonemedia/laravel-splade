<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PersistentLayoutTest extends DuskTestCase
{
    /** @test */
    public function it_can_navigate_without_reloading_the_layout()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/video/one')
                ->waitForText('Chapter one')
                ->assertScript('return document.querySelector("video").paused', true)
                ->tap(fn ($browser) => $browser->script('document.querySelector("video").play()'))
                ->pause(500)
                ->assertScript('return document.querySelector("video").paused', false)
                ->click('@two')
                ->waitForText('Chapter two')
                ->pause(500)
                ->assertScript('return document.querySelector("video").paused', false);
        });
    }

    /** @test */
    public function it_doesnt_mess_with_nested_components()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/video/one')
                ->waitForText('Chapter one')
                ->assertSeeIn('h1', 'Title for Chapter 1')
                ->assertSee('Subtitle for Chapter 1')
                ->assertSeeIn('h4', 'Title eno')
                ->assertSeeIn('h5', 'Subtitle eno')
                ->assertSeeIn('h6', 'Helptext')
                ->assertSeeIn('@header-slot', 'HeaderSlot');
        });
    }

    /** @test */
    public function it_can_keep_the_dynamic_components_alive_when_navigating()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/form')
                ->waitForText('NavigationForm')
                ->type('persistent', 'persistent-1')
                ->click('@video')
                ->waitForText('Chapter one')
                ->type('persistent_video_one', 'persistent-2')
                ->click('@two')
                ->waitForText('Chapter two')
                ->type('persistent_video_two', 'persistent-3')
                ->click('@nav')
                ->waitForText('NavigationOne')
                ->back()
                ->waitForText('Chapter two')
                ->assertInputValue('persistent_video_two', 'persistent-3')
                ->back()
                ->waitForText('Chapter one')
                ->assertInputValue('persistent_video_one', 'persistent-2')
                ->back()
                ->waitForText('NavigationForm')
                ->assertInputValue('persistent', 'persistent-1');
        });
    }
}
