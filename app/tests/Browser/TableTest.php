<?php

namespace Tests\Browser;

use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class TableTest extends DuskTestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_paginate_the_users()
    {
        UserFactory::new()->count(100)->create();

        $this->browse(function (Browser $browser) {
            $browser->visit('/table/users');
        });
    }
}
