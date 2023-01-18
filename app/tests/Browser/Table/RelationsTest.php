<?php

namespace Tests\Browser\Table;

use App\Models\Address;
use App\Models\Organization;
use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class RelationsTest extends DuskTestCase
{
    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_search_through_a_nested_relationship($spatieQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spatieQueryBuilder) {
            $projects = Project::query()
                ->orderBy('name')
                ->limit(10)
                ->get();

            $browser->visit('table/relationsAndExports/' . ($spatieQueryBuilder ? '1' : '0'))
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $projects->get(0)->name) // first column = checkboxes
                ->assertSeeIn('tbody', $projects->get(1)->name)
                ->assertSeeIn('tbody', $projects->get(1)->organization->name)
                ->press('@add-search-row-dropdown')
                ->press('@add-search-row-organization.name')
                ->type('searchInput-organization.name', $projects->get(0)->organization->name)
                ->waitUntilMissingText($projects->get(1)->organization->name)
                ->assertSeeIn('tbody', $projects->get(0)->name);
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_search_through_a_nested_relationship_using_global_search($spatieQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spatieQueryBuilder) {
            $projects = Project::query()
                ->orderBy('name')
                ->limit(10)
                ->get();

            $browser->visit('table/relationsAndExports/' . ($spatieQueryBuilder ? '1' : '0'))
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $projects->get(0)->name) // first column = checkboxes
                ->assertSeeIn('tbody', $projects->get(1)->name)
                ->assertSeeIn('tbody', $projects->get(1)->organization->name)
                ->type('searchInput-global',
                    $spatieQueryBuilder
                        ? $projects->get(0)->organization->name
                        : '"' . $projects->get(0)->organization->name . '"'
                )
                ->waitUntilMissingText($projects->get(1)->organization->name)
                ->assertSeeIn('tbody', $projects->get(0)->name)

                // two levels
                ->type('searchInput-global',
                    $spatieQueryBuilder
                        ? $projects->get(1)->organization->address->city
                        : '"' . $projects->get(1)->organization->address->city . '"'
                )
                ->waitUntilMissingText($projects->get(0)->organization->name)
                ->assertSeeIn('tbody', $projects->get(1)->name);
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_order_by_a_relationship($spatieQueryBuilder)
    {
        if ($spatieQueryBuilder) {
            $this->markTestSkipped('Spatie Query Builder does not support ordering by nested relationships');
        }

        $this->browse(function (Browser $browser) use ($spatieQueryBuilder) {
            $firstProject = Project::query()
                ->orderBy('name')
                ->first();

            $firstOrganization = Organization::query()
                ->orderBy('name')
                ->first();

            $firstAddress = Address::query()
                ->orderBy('city')
                ->first();

            $browser->visit('table/relationsAndExports/' . ($spatieQueryBuilder ? '1' : '0'))
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstProject->name) // first column = checkboxes
                ->click('@sort-organization.name')
                ->pause(500)
                ->waitForText($firstOrganization->name)
                ->pause(500)
                ->assertSeeIn('tbody tr:first-child td:nth-child(4)', $firstOrganization->name)
                ->click('@sort-organization.address.city')
                ->pause(500)
                ->waitForText($firstAddress->city)
                ->pause(500)
                ->assertSeeIn('tbody tr:first-child td:nth-child(5)', $firstAddress->city);
        });
    }
}
