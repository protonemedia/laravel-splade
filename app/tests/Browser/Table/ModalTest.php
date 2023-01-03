<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class ModalTest extends DuskTestCase
{
    /**
     * @test
     */
    public function it_can_paginate_in_a_modal_without_closing_the_modal()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get();

            $browser
                ->visit('/table/modal/')
                ->resize(1920, 1080)
                ->click('@open-modal')
                ->waitForText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)
                ->press('@pagination-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertPathIs('/table/modal/')
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name);
        });
    }

    /**
     * @test
     */
    public function it_can_order_in_a_modal_without_closing_the_modal()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get();

            $browser
                ->visit('/table/modal/')
                ->resize(1920, 1080)
                ->click('@open-modal')
                ->waitForText($users->get(0)->name)

                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)

                // Sort desc
                ->click('@sort-name')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertPathIs('/table/modal/')

                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(99)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(90)->name);
        });
    }

    /**
     * @test
     */
    public function it_can_search_in_a_modal_without_closing_the_modal()
    {
        $this->browse(function (Browser $browser) {
            User::first()->forceFill([
                'name'  => 'Pascal Baljet',
                'email' => 'pascal@protone.media',
            ])->save();

            $users = User::query()
                ->select(['id', 'name', 'email'])
                ->orderBy('name')
                ->get();

            $browser->visit('/table/modal/')
                ->resize(1920, 1080)
                ->click('@open-modal')
                ->waitForText($users->get(0)->name)

                // First user
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertDontSee('Pascal Baljet')
                ->type('searchInput-global', 'Pascal Baljet')
                ->waitForText('pascal@protone.media')
                ->assertPathIs('/table/modal/')

                ->type('searchInput-global', ' ')
                ->waitUntilMissingText('pascal@protone.media')
                ->assertPathIs('/table/modal/')

                ->type('searchInput-global', 'pascal@protone.media')
                ->waitForText('Pascal Baljet')
                ->assertPathIs('/table/modal/');
        });
    }
}
