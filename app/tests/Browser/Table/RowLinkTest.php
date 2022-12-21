<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class RowLinkTest extends DuskTestCase
{
    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_make_a_row_clickable($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/rowLink/' . (int) $spladeQueryBuilder)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $firstUser->name)
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('NavigationOne')
                ->assertRouteIs('navigation.one', ['id' => $firstUser->id]);
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_make_a_row_clickable_and_open_a_modal($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $browser->visit('table/rowModal/' . (int) $spladeQueryBuilder)
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('ModalComponentOne')
                ->assertSee('ModalComponentOne');
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_make_a_row_clickable_and_open_a_slideover($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $browser->visit('table/rowSlideover/' . (int) $spladeQueryBuilder)
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('ModalComponentOne')
                ->assertSee('ModalComponentOne');
        });
    }
}
