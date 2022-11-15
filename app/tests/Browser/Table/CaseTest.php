<?php

namespace Tests\Browser\Table;

use App\Models\User;
use Illuminate\Database\SQLiteConnection;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class CaseTest extends DuskTestCase
{
    /** @test */
    public function it_can_search_case_insensitive()
    {
        $this->browse(function (Browser $browser) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $firstUser->forceFill([
                'name' => strtoupper($firstUser->name),
            ])->save();

            $browser->visit('table/caseInsensitive')
                ->waitForText(strtoupper($firstUser->name))
                ->type('searchInput-global', strtolower($firstUser->name))
                ->waitForText(strtoupper($firstUser->name));
        });
    }

    /** @test */
    public function it_can_search_case_sensitive()
    {
        if (DB::connection() instanceof SQLiteConnection) {
            return $this->markTestSkipped('SQLite supports case sensitive queries through a global setting.');
        }

        $this->browse(function (Browser $browser) {
            $firstUser = User::query()
                ->orderBy('name')
                ->first();

            $firstUser->forceFill([
                'name' => strtoupper($firstUser->name),
            ])->save();

            $browser->visit('table/caseSensitive')
                ->waitForText(strtoupper($firstUser->name))
                ->type('searchInput-global', strtolower($firstUser->name))
                ->waitUntilMissingText(strtoupper($firstUser->name))
                ->type('searchInput-global', strtoupper($firstUser->name))
                ->waitForText(strtoupper($firstUser->name));
        });
    }
}
