<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SortTest extends DuskTestCase
{
    /** @test */
    public function it_sorts_by_name_by_default()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $usersByEmail = $users->sortBy->email->values();

            $browser->visit('table/users/eloquent')
                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)

                // Sort desc
                ->click('@sort-name')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(99)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(90)->name)

                // Restore asc sort
                ->click('@sort-name')
                ->waitUntilMissingText($users->get(99)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)

                // Sort by other column
                ->click('@sort-email')
                ->waitForTextIn('tr:first-child td:nth-child(2)', $usersByEmail->get(0)->email)
                ->assertSeeIn('tr:first-child td:nth-child(2)', $usersByEmail->get(0)->email)
                ->assertSeeIn('tr:last-child td:nth-child(2)', $usersByEmail->get(9)->email);
        });
    }
}
