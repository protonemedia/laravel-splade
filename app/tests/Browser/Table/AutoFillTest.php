<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Illuminate\Support\Str;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class AutoFillTest extends DuskTestCase
{
    /**
     * @test
     * @dataProvider tableUrls
     */
    public function it_generates_the_table_header_with_sort_buttons($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $browser->visit($url)
                // Header names
                ->assertSeeIn('th:nth-child(1)', Str::upper('Name'))
                ->assertSeeIn('th:nth-child(2)', Str::upper('Email'))
                ->assertSeeIn('th:nth-child(3)', Str::upper('Language'))
                ->assertSeeIn('th:nth-child(4)', Str::upper('Actions'))

                // Sort links
                ->assertPresent('th:nth-child(1) a')
                ->assertPresent('th:nth-child(2) a')
                ->assertNotPresent('th:nth-child(3) a')
                ->assertNotPresent('th:nth-child(4) a');
        });
    }

    /**
     * @test
     * @dataProvider tableUrls
     */
    public function it_generates_the_table_body_with_a_custom_action_column($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $users = User::orderBy('name')->limit(10)->get();

            $browser->visit($url)
                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->first()->name)
                ->assertSeeIn('tr:first-child td:nth-child(2)', $users->first()->email)
                ->assertSeeIn('tr:first-child td:nth-child(3)', $users->first()->language_code)
                ->within('tr:first-child td:nth-child(4)', function (Browser $browser) use ($users) {
                    $browser->assertSeeLink('Edit')
                        ->assertAttribute('a', 'href', "/users/{$users->first()->id}/edit");
                })

                // Last user
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->last()->name)
                ->assertSeeIn('tr:last-child td:nth-child(2)', $users->last()->email)
                ->assertSeeIn('tr:last-child td:nth-child(3)', $users->last()->language_code)
                ->within('tr:last-child td:nth-child(4)', function (Browser $browser) use ($users) {
                    $browser->assertSeeLink('Edit')
                        ->assertAttribute('a', 'href', "/users/{$users->last()->id}/edit");
                });
        });
    }
}
