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
