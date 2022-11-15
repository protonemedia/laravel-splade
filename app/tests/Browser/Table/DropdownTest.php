<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class DropdownTest extends DuskTestCase
{
    /** @test */
    public function it_renders_the_dropdown_outside_of_the_table_wrapper()
    {
        $this->browse(function (Browser $browser) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $browser
                ->visit('table/overflow')
                ->waitForText($firstUser->email)
                ->script("document.querySelector('div.overflow-x-auto').style.overflow = \"hidden\";");

            $browser
                ->press('@row-button')
                ->pause(300)
                ->assertVisible('@hey');
        });
    }
}
