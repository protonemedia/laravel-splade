<?php

namespace Tests\Browser\Bridge;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PropsTest extends DuskTestCase
{
    /** @test */
    public function it_has_two_way_binding_between_vue_and_php()
    {
        $this->browse(function (Browser $browser) {
            /** @var User */
            $user = User::firstOrFail();

            $browser->visit('/bridge/props')
                ->waitForText($user->email)
                ->press('Randomize')
                ->waitUntilMissingText($user->email)
                ->tap(fn () => $user->refresh())
                ->assertSee($user->email)
                ->type('prefix', 'splade_')
                ->press('Randomize')
                ->waitUntilMissingText($user->email);

            $user->refresh();

            $this->assertStringStartsWith('splade_', $currentEmail = $user->email);

            $browser
                ->keys('input[name="prefix"]', ...array_fill(0, strlen('splade_'), '{backspace}'))
                ->press('Randomize')
                ->waitUntilMissingText($currentEmail);

            $user->refresh();

            $this->assertNotEquals($currentEmail, $user->email);
            $this->assertStringStartsNotWith('splade_', $user->email);
        });
    }
}
