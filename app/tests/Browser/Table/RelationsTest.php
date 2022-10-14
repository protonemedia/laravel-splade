<?php

namespace Tests\Browser\Table;

use App\Models\Address;
use App\Models\Organization;
use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class RelationsTest extends DuskTestCase
{
    /** @test */
    public function it_can_search_through_a_nested_relationship()
    {
        $this->browse(function (Browser $browser) {
            $projects = Project::query()
                ->orderBy('name')
                ->limit(10)
                ->get();

            $browser->visit('table/relationsAndExports')
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $projects->get(0)->name) // first column = checkboxes
                ->assertSeeIn('tbody', $projects->get(1)->name)
                ->assertSeeIn('tbody', $projects->get(1)->organization->name)
                ->type('searchInput-global', '"' . $projects->get(0)->organization->name . '"')
                ->waitUntilMissingText($projects->get(1)->organization->name)
                ->assertSeeIn('tbody', $projects->get(0)->name)

                // two levels
                ->type('searchInput-global', '"' . $projects->get(1)->organization->address->city . '"')
                ->waitUntilMissingText($projects->get(0)->organization->name)
                ->assertSeeIn('tbody', $projects->get(1)->name);
        });
    }

    /** @test */
    public function it_can_order_by_a_relationship()
    {
        $this->browse(function (Browser $browser) {
            $firstProject = Project::query()
                ->orderBy('name')
                ->first();

            $firstOrganization = Organization::query()
                ->orderBy('name')
                ->first();

            $firstAddress = Address::query()
                ->orderBy('city')
                ->first();

            $browser->visit('table/relationsAndExports')
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstProject->name) // first column = checkboxes
                ->click('@sort-organization.name')
                ->waitForText($firstOrganization->name)
                ->assertSeeIn('tbody tr:first-child td:nth-child(4)', $firstOrganization->name)
                ->click('@sort-organization.address.city')
                ->waitForText($firstAddress->city)
                ->assertSeeIn('tbody tr:first-child td:nth-child(5)', $firstAddress->city);
        });
    }
}
