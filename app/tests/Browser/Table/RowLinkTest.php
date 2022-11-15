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
    /** @test */
    public function it_can_make_a_row_clickable()
    {
        $this->browse(function (Browser $browser) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/rowLink')
                ->assertSeeIn('tr:first-child td:nth-child(1)', $firstUser->name)
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('NavigationOne')
                ->assertRouteIs('navigation.one', ['id' => $firstUser->id]);
        });
    }

    /** @test */
    public function it_can_make_a_row_clickable_and_open_a_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('table/rowModal')
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('ModalComponentOne');
        });
    }

    /** @test */
    public function it_can_make_a_row_clickable_and_open_a_slideover()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('table/rowSlideover')
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('ModalComponentOne');
        });
    }
}
