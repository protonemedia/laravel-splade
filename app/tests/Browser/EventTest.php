<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class EventTest extends DuskTestCase
{
    use UsesWebsocketsServerTrait;

    /** @test */
    public function it_can_redirect_on_an_event()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!');

            $response = Http::asJson()->get(route('event.redirect'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForRoute('navigation.one', [], 60);
        });
    }

    /** @test */
    public function it_can_refresh_on_an_event()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!')
                ->click('@increase')
                ->assertSeeIn('@counter', 2);

            $response = Http::asJson()->get(route('event.refresh'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForTextIn('@counter', 1);
        });
    }

    /** @test */
    public function it_can_refresh_on_an_event_while_preserving_the_scroll_position_from_the_event()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!')
                ->click('@increase')
                ->assertSeeIn('@counter', 2)
                ->keys('', '{PAGE_DOWN}')
                ->pause(250);

            $scrollHeight = $browser->script('return window.scrollY');

            $this->assertTrue($scrollHeight > 0);

            $response = Http::asJson()->get(route('event.refreshPreserveScroll'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForTextIn('@counter', 1);

            $scrollHeight = $browser->script('return window.scrollY');

            $this->assertTrue($scrollHeight > 0);
        });
    }

    /** @test */
    public function it_can_refresh_on_an_event_while_preserving_the_scroll_position_from_the_template()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/eventPreserveScroll')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!')
                ->click('@increase')
                ->assertSeeIn('@counter', 2)
                ->keys('', '{PAGE_DOWN}')
                ->pause(250);

            $scrollHeight = $browser->script('return window.scrollY');

            $this->assertTrue($scrollHeight > 0);

            $response = Http::asJson()->get(route('event.refresh'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForTextIn('@counter', 1);

            $scrollHeight = $browser->script('return window.scrollY');

            $this->assertTrue($scrollHeight > 0);
        });
    }

    /** @test */
    public function it_waits_for_a_redirect_until_the_modal_is_closed()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!')
                ->click('@open-modal')
                ->waitForText('ModalComponentOne');

            $response = Http::asJson()->get(route('event.redirect'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->assertPathIs('/event')
                ->click('@close-modal-button')
                ->waitForRoute('navigation.one', [], 60);
        });
    }

    /** @test */
    public function it_waits_for_a_refresh_until_the_modal_is_closed()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!')
                ->click('@increase')
                ->assertSeeIn('@counter', 2)
                ->click('@open-modal')
                ->waitForText('ModalComponentOne');

            $response = Http::asJson()->get(route('event.refresh'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->assertPathIs('/event')
                ->assertSeeIn('@counter', 2)
                ->click('@close-modal-button')
                ->waitForTextIn('@counter', 1);
        });
    }

    /** @test */
    public function it_can_show_the_event()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!');

            $response = Http::asJson()->get(route('event.simple'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForTextIn('@name', 'SimpleEvent');
            $browser->waitForTextIn('@username', 'splade');
        });
    }

    /** @test */
    public function it_can_show_a_toast()
    {
        $this->browse(function (Browser $browser) {
            $user = User::firstOrFail();

            $browser->loginAs($user)
                ->visit('/event')
                ->waitForText('EventComponent')
                ->waitForText($user->name)
                ->waitForText('Subscribed!');

            $response = Http::asJson()->get(route('event.toast'));

            $this->assertTrue(
                $response->successful(),
                $response->body()
            );

            $browser->waitForText('From event!');
            $browser->assertSee('From event!');
        });
    }
}
