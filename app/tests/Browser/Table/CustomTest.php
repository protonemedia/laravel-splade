<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class CustomTest extends DuskTestCase
{
    /**
     * @test
     * @dataProvider booleanDataset
     */
    public function it_can_provide_a_custom_head_and_body($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/custom/' . (int) $spladeQueryBuilder)
                ->assertSeeIn('thead tr:first-child th:nth-child(1)', 'Email')
                ->assertSeeIn('thead tr:first-child th:nth-child(2)', 'Name')
                ->assertSeeIn('tbody tr:first-child td:nth-child(1)', $firstUser->email)
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstUser->name);
        });
    }
}
