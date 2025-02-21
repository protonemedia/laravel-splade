<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

#[\PHPUnit\Framework\Attributes\Group('table')]
class RowLinkTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    #[\PHPUnit\Framework\Attributes\DataProvider('booleanDataset')]
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

    #[\PHPUnit\Framework\Attributes\Test]
    #[\PHPUnit\Framework\Attributes\DataProvider('booleanDataset')]
    public function it_can_make_a_row_clickable_and_open_a_modal($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $browser->visit('table/rowModal/' . (int) $spladeQueryBuilder)
                ->click('tr:first-child td:nth-child(1)')
                ->waitForText('ModalComponentOne')
                ->assertSee('ModalComponentOne');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    #[\PHPUnit\Framework\Attributes\DataProvider('booleanDataset')]
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
