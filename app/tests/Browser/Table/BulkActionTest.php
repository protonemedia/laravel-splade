<?php

namespace Tests\Browser\Table;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BulkActionTest extends DuskTestCase
{
    /** @test */
    public function it_can_perform_one_row()
    {
        $this->browse(function (Browser $browser) {
            $longTimeAgo = now()->subCentury();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($longTimeAgo) {
                Project::query()->update(['updated_at' => $longTimeAgo]);
            });

            $browser->visit('table/relationsAndExports')
                ->press('@bulk-actions-exports-dropdown')
                ->assertMissing('@action.touch-timestamp')
                ->press('@bulk-actions-exports-dropdown') // to hide
                ->check('table-row-bulk-action', Project::orderBy('name')->first()->id)
                ->press('@bulk-actions-exports-dropdown')
                ->press('@action.touch-timestamp')
                ->waitForText('Timestamps updated!');

            $this->assertEquals(29, Project::whereUpdatedAt($longTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_one_all_rows_on_the_current_page_with_a_confirmation()
    {
        $this->browse(function (Browser $browser) {
            $longTimeAgo = now()->subCentury();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($longTimeAgo) {
                Project::query()->update(['updated_at' => $longTimeAgo]);
            });

            $browser->visit('table/relationsAndExports')
                ->press('@select-rows-dropdown')
                ->press('@select-all-on-this-page')

                ->press('@bulk-actions-exports-dropdown')
                ->press('@action.touch-timestamp-confirm')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-cancel')

                ->press('@bulk-actions-exports-dropdown')
                ->press('@action.touch-timestamp-confirm')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-confirm')
                ->waitForText('Timestamps updated!');

            $this->assertEquals(15, Project::whereUpdatedAt($longTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_one_all_rows_on_the_all_pages_with_a_custom_confirmation()
    {
        $this->browse(function (Browser $browser) {
            $longTimeAgo = now()->subCentury();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($longTimeAgo) {
                Project::query()->update(['updated_at' => $longTimeAgo]);
            });

            $browser->visit('table/relationsAndExports')
                ->press('@select-rows-dropdown')
                ->press('@select-all-results')

                ->press('@bulk-actions-exports-dropdown')
                ->press('@action.touch-timestamp-custom-confirm')
                ->waitForText('Do you want to touch the timestamps?')
                ->assertSee('You can\'t undo this')
                ->assertSeeIn('@splade-confirm-confirm', 'Sure!')
                ->assertSeeIn('@splade-confirm-cancel', 'Nope!')
                ->press('@splade-confirm-confirm')
                ->waitForText('Timestamps updated!');

            $this->assertEquals(0, Project::whereUpdatedAt($longTimeAgo)->count());
        });
    }
}
