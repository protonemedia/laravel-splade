<?php

namespace Tests\Browser\Bridge;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SlotTest extends DuskTestCase
{
    /** @test */
    public function it_renders_the_original_view_in_the_vue_component()
    {
        $this->browse(function (Browser $browser) {
            /** @var User */
            $user = User::firstOrFail();

            $browser->visit('/bridge/render')
                ->waitForText($user->email)
                ->assertSee('Custom Title')
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
