<?php

namespace Tests\Browser\Table;

use App\Models\Project;
use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class BulkActionTest extends DuskTestCase
{
    /** @test */
    public function it_can_perform_one_row()
    {
        $this->browse(function (Browser $browser) {
            $someTimeAgo = now()->subDecade();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($someTimeAgo) {
                Project::query()->update(['updated_at' => $someTimeAgo]);
            });

            $browser->visit('table/relationsAndExports')
                ->press('@bulk-actions-exports-dropdown')
                ->pause(100)
                ->assertMissing('@action.touch-timestamp')
                ->press('@bulk-actions-exports-dropdown') // to hide
                ->pause(100)
                ->check('table-row-bulk-action', Project::orderBy('name')->first()->id)
                ->press('@bulk-actions-exports-dropdown')
                ->pause(100)
                ->press('@action.touch-timestamp')
                ->pause(100)
                ->waitForText('Timestamps updated!');

            $this->assertEquals(29, Project::whereUpdatedAt($someTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_one_all_rows_on_the_current_page_with_a_confirmation()
    {
        $this->browse(function (Browser $browser) {
            $someTimeAgo = now()->subDecade();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($someTimeAgo) {
                Project::query()->update(['updated_at' => $someTimeAgo]);
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

            $this->assertEquals(15, Project::whereUpdatedAt($someTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_one_all_rows_on_the_current_page_with_a_password_confirmation()
    {
        $this->browse(function (Browser $browser) {
            $someTimeAgo = now()->subDecade();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($someTimeAgo) {
                Project::query()->update(['updated_at' => $someTimeAgo]);
            });

            $browser->loginAs(User::firstOrFail())
                ->visit('table/relationsAndExports')
                ->press('@select-rows-dropdown')
                ->press('@select-all-on-this-page')

                ->press('@bulk-actions-exports-dropdown')
                ->press('@action.touch-timestamp-confirm-password')
                ->waitForText('Are you sure you want to continue?')
                ->type('password', 'password')
                ->press('@splade-confirm-confirm')
                ->waitForText('Timestamps updated!');

            $this->assertEquals(15, Project::whereUpdatedAt($someTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_on_all_rows_of_the_filtered_result()
    {
        $this->browse(function (Browser $browser) {
            $someTimeAgo = now()->subDecade();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($someTimeAgo) {
                Project::query()->update(['updated_at' => $someTimeAgo]);
            });

            $projects = Project::orderBy('name')->get();

            /** @var Project */
            $firstProject = $projects->first();
            $firstProject->forceFill(['name' => 'aaaaaa'])->save();

            $browser->visit('table/relationsAndExports')
                ->type('searchInput-global', $firstProject->name)
                ->waitUntilMissingText($projects->get(1)->name)
                ->assertSee($firstProject->name)
                ->press('@select-rows-dropdown')
                ->press('@select-all-results')
                ->press('@bulk-actions-exports-dropdown')
                ->pause(100)
                ->press('@action.touch-timestamp')
                ->pause(100)
                ->waitForText('Timestamps updated!');

            $this->assertEquals(29, Project::whereUpdatedAt($someTimeAgo)->count());
        });
    }

    /** @test */
    public function it_can_perform_one_all_rows_on_the_all_pages_with_a_custom_confirmation()
    {
        $this->browse(function (Browser $browser) {
            $someTimeAgo = now()->subDecade();

            $this->assertEquals(30, Project::count());

            Project::withoutTouching(function () use ($someTimeAgo) {
                Project::query()->update(['updated_at' => $someTimeAgo]);
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

            $this->assertEquals(0, Project::whereUpdatedAt($someTimeAgo)->count());
        });
    }
}
