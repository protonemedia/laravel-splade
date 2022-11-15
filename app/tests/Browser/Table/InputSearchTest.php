<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class InputSearchTest extends DuskTestCase
{
    /**
     * @test
     * @dataProvider tableUrls
     */
    public function it_can_search_by_name_or_email($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            User::first()->forceFill([
                'name'  => 'Pascal Baljet',
                'email' => 'pascal@protone.media',
            ])->save();

            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit($url)
                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertDontSee('Pascal Baljet')
                ->press('@add-search-row-dropdown')
                ->press('@add-search-row-name')
                ->type('searchInput-name', 'Pascal Baljet')
                ->waitForText('pascal@protone.media')
                ->press('@remove-search-row-name')
                ->waitUntilMissingText('pascal@protone.media')
                ->press('@add-search-row-dropdown')
                ->press('@add-search-row-email')
                ->type('searchInput-email', 'pascal@protone.media')
                ->waitForText('Pascal Baljet');
        });
    }

    /**
     * @test
     * @dataProvider tableUrls
     */
    public function it_doesnt_remove_the_search_input_when_the_field_is_cleared($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            User::first()->forceFill([
                'name'  => 'Pascal Baljet',
                'email' => 'pascal@protone.media',
            ])->save();

            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit($url)
                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertDontSee('Pascal Baljet')
                ->press('@add-search-row-dropdown')
                ->press('@add-search-row-name')
                ->type('searchInput-name', 'Pascal Baljet')
                ->waitForText('pascal@protone.media')
                ->type('searchInput-name', ' ')
                ->keys('input[name="searchInput-name"]', '{backspace}')
                ->waitUntilMissingText('pascal@protone.media')
                ->assertPresent('input[name="searchInput-name"]');
        });
    }
}
