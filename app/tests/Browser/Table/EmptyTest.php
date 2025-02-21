<?php

namespace Tests\Browser\Table;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

#[\PHPUnit\Framework\Attributes\Group('table')]
class EmptyTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_shows_a_text_when_no_results_have_been_found()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/table/empty/')
                ->assertSee('There are no items to show.');
        });
    }
}
