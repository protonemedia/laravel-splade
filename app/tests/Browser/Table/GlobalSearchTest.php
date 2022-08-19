<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class GlobalSearchTest extends DuskTestCase
{
    /** @test */
    public function it_can_globally_search()
    {
        $this->browse(function (Browser $browser) {
            User::first()->forceFill([
                'name'  => 'Pascal Baljet',
                'email' => 'pascal@protone.media',
            ])->save();

            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit('table/users/eloquent')
                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertDontSee('Pascal Baljet')
                ->type('searchInput-global', 'Pascal Baljet')
                ->waitForText('pascal@protone.media')
                ->type('searchInput-global', ' ')
                ->waitUntilMissingText('pascal@protone.media')
                ->type('searchInput-global', 'pascal@protone.media')
                ->waitForText('Pascal Baljet');
        });
    }

    /** @test */
    public function it_resets_the_page_on_search()
    {
        $this->browse(function (Browser $browser) {
            User::first()->forceFill([
                'name'  => 'Pascal Baljet',
                'email' => 'pascal@protone.media',
            ])->save();

            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit('table/users/eloquent')
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertDontSee('Pascal Baljet')
                ->press('@pagination-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->type('searchInput-global', 'Pascal Baljet')
                ->waitForText('pascal@protone.media');
        });
    }
}
