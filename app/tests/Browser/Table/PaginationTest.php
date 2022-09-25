<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PaginationTest extends DuskTestCase
{
    public function simpleUrls()
    {
        return [
            ['/table/users/eloquent/', 'simple'],
            ['/table/users/eloquent/', 'cursor'],
        ];
    }

    /** @test */
    public function it_generates_a_paginator_with_links()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get();

            $url = '/table/users/eloquent';

            $browser
                ->visit($url)
                ->resize(1920, 1080)
                ->assertMissing('@pagination-simple-previous')
                ->assertMissing('@pagination-simple-next')

                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)
                ->assertMissing('@pagination-previous')
                ->press('@pagination-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name)
                ->press('@pagination-3')
                ->waitUntilMissingText($users->get(10)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(20)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(29)->name)
                ->press('@pagination-previous')
                ->waitUntilMissingText($users->get(20)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name)
                ->press('@pagination-10')
                ->waitUntilMissingText($users->get(10)->name)
                ->assertMissing('@pagination-next')

                ->press('@pagination-1')
                ->waitUntilMissingText($users->get(99)->name)

                // mobile pagination
                ->resize(320, 480)

                ->assertMissing('@pagination-next')
                ->assertMissing('@pagination-previous')

                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)
                ->assertMissing('@pagination-simple-previous')
                ->press('@pagination-simple-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name)
                ->visit($url . '?page=10')
                ->waitUntilMissingText($users->get(10)->name)
                ->assertMissing('@pagination-simple-next')
                ->press('@pagination-simple-previous')
                ->waitUntilMissingText($users->get(99)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(80)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(89)->name);
        });
    }

    /** @test */
    public function it_disabled_the_per_page_selection_on_less_than_two_options()
    {
        $this->browse(function (Browser $browser) {
            $users = User::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get();

            $browser->visit('/table/noPerPage')
                ->resize(1920, 1080)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertMissing('select[name="per_page"]');
        });
    }

    /**
     * @test
     * @dataProvider simpleUrls
     */
    public function it_generates_a_simple_paginator($url, $method)
    {
        $url .= $method;

        $this->browse(function (Browser $browser) use ($url, $method) {
            $users = User::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get();

            $cursor = '?cursor=' . str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode([
                'name'               => $users->get(89)->name,
                '_pointsToNextItems' => true,
            ])));

            $pageTen = $method === 'simple' ? '?page=10' : $cursor;

            $browser
                ->visit($url)
                ->resize(1920, 1080)

                ->assertMissing('@pagination-next')
                ->assertMissing('@pagination-previous')

                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)
                ->assertMissing('@pagination-simple-previous')
                ->press('@pagination-simple-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name)
                ->visit($url . $pageTen)
                ->waitUntilMissingText($users->get(10)->name)
                ->assertMissing('@pagination-simple-next')
                ->press('@pagination-simple-previous')
                ->waitUntilMissingText($users->get(99)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(80)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(89)->name)

                // mobile pagination
                ->visit($url)
                ->resize(320, 480)

                ->assertMissing('@pagination-next')
                ->assertMissing('@pagination-previous')

                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(0)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(9)->name)
                ->assertMissing('@pagination-simple-previous')
                ->press('@pagination-simple-next')
                ->waitUntilMissingText($users->get(0)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(10)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(19)->name)
                ->visit($url . $pageTen)
                ->waitUntilMissingText($users->get(10)->name)
                ->assertMissing('@pagination-simple-next')
                ->press('@pagination-simple-previous')
                ->waitUntilMissingText($users->get(99)->name)
                ->assertSeeIn('tr:first-child td:nth-child(1)', $users->get(80)->name)
                ->assertSeeIn('tr:last-child td:nth-child(1)', $users->get(89)->name);
        });
    }
}
