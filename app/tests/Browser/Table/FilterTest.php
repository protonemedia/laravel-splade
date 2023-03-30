<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class FilterTest extends DuskTestCase
{
    /**
     * @test
     *
     * @dataProvider tableUrls
     */
    public function it_can_use_select_filters($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            User::orderBy('name')->first()->forceFill([
                'language_code' => 'en',
            ])->save();

            $users = User::query()
                ->orderBy('name')
                ->get();

            $firstDutchUser = $users->firstWhere('language_code', 'nl');

            $browser->visit($url)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->press('@filters-dropdown')
                ->select('filter-language_code', 'nl')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $firstDutchUser->name);
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_provide_a_callback_to_transform_the_value($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            User::orderBy('name')->first()->forceFill([
                'is_admin' => '1',
            ])->save();

            $firstUser = User::query()->orderBy('name')->first();

            $browser->visit('/table/as/' . (int) $spladeQueryBuilder)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(1)', $firstUser->name)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(2)', strrev($firstUser->email));
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_use_boolean_keys_for_the_filter_options($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            User::orderBy('name')->first()->forceFill([
                'is_admin' => '1',
            ])->save();

            $firstAdmin    = User::query()->orderBy('name')->where('is_admin', 1)->first();
            $firstNonAdmin = User::query()->orderBy('name')->where('is_admin', 0)->first();

            $browser->visit('/table/boolean/' . (int) $spladeQueryBuilder)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(1)', $firstAdmin->name)
                ->assertSeeIn('tr:nth-child(2) td:nth-child(1)', $firstNonAdmin->name)

                ->press('@filters-dropdown')
                ->select('filter-is_admin', '1')
                ->waitUntilMissingText($firstNonAdmin->name)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(1)', $firstAdmin->name)
                ->assertDontSee($firstNonAdmin->name)

                ->press('@filters-dropdown')
                ->select('filter-is_admin', '0')
                ->waitUntilMissingText($firstAdmin->name)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(1)', $firstNonAdmin->name)
                ->assertDontSee($firstAdmin->name)

                ->press('@reset-table')
                ->waitForText($firstAdmin->name)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(1)', $firstAdmin->name)
                ->assertSeeIn('tr:nth-child(2) td:nth-child(1)', $firstNonAdmin->name);
        });
    }
}
