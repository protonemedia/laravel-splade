<?php

namespace Tests\Browser\Table;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class ExportTest extends DuskTestCase
{
    /** @test */
    public function it_can_export_as_excel()
    {
        $this->browse(function (Browser $browser) {
            $this->configureDownloadPath($browser, __DIR__ . '/downloads');

            $firstProject = Project::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/relationsAndExports')
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstProject->name) // first column = checkboxes
                ->press('@bulk-actions-exports-dropdown')
                ->click('@action.excel-export')
                ->waitUsing(null, 100, function () {
                    return file_exists(__DIR__ . '/downloads/projects.xlsx');
                });
        });
    }

    /** @test */
    public function it_can_export_as_csv()
    {
        $this->browse(function (Browser $browser) {
            $this->configureDownloadPath($browser, __DIR__ . '/downloads');

            $firstProject = Project::query()
                ->orderBy('name')
                ->first();

            $browser->visit('table/relationsAndExports')
                ->assertSeeIn('tbody tr:first-child td:nth-child(2)', $firstProject->name) // first column = checkboxes
                ->press('@bulk-actions-exports-dropdown')
                ->click('@action.csv-export')
                ->waitUsing(null, 100, function () {
                    return file_exists(__DIR__ . '/downloads/projects.csv');
                });
        });
    }
}
