<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class ColumnTest extends DuskTestCase
{
    /**
     * @test
     * @dataProvider tableUrls
     */
    public function it_can_toggle_columns($url)
    {
        $this->browse(function (Browser $browser) use ($url) {
            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit($url)
                ->assertSeeIn('tr:first-child td:nth-child(2)', $users->get(0)->email)
                ->press('@columns-dropdown')
                ->press('@toggle-column-email')
                ->waitUntilMissingText($users->get(0)->email)
                ->press('@toggle-column-email')
                ->waitForTextIn('tr:first-child td:nth-child(2)', $users->get(0)->email);
        });
    }
}
