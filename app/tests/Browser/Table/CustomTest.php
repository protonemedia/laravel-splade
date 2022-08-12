<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CustomTest extends DuskTestCase
{
    /** @test */
    public function it_can_provide_a_custom_head_and_body()
    {
        $this->browse(function (Browser $browser) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/custom')
                ->assertSeeIn('thead tr:first-child th:nth-child(1)', 'Email')
                ->assertSeeIn('thead tr:first-child th:nth-child(2)', 'Name')
                ->assertSeeIn('tbody tr:first-child td:nth-child(1)', $firstUser->email)
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstUser->name);
        });
    }
}
