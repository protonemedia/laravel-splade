<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ColumnTest extends DuskTestCase
{
    /** @test */
    public function it_can_toggle_columns()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit('table/users/eloquent')
                ->assertSeeIn('tr:first-child td:nth-child(2)', $users->get(0)->email)
                ->press('@columns-dropdown')
                ->press('@toggle-column-email')
                ->waitUntilMissingText($users->get(0)->email)
                ->press('@toggle-column-email')
                ->waitForTextIn('tr:first-child td:nth-child(2)', $users->get(0)->email);
        });
    }
}
