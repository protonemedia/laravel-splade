<?php

namespace Tests\Browser\Table;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class ScrollTest extends DuskTestCase
{
    /**
     * @test
     */
    public function it_can_preserve_the_scroll_value_when_sorting_the_table()
    {
        $this->browse(function (Browser $browser) {
            $firstProject  = Project::orderBy('name')->first();
            $latestProject = Project::orderByDesc('name')->first();

            $browser
                ->visit('table/relationsAndExports')
                ->assertSeeIn('tr:nth-child(1) td:nth-child(2)', $firstProject->name)
                ->resize(1920, 540)
                ->scrollToOffset(100);

            $scrollY = $browser->script('return window.scrollY');

            $this->assertTrue($scrollY > 0);

            $browser
                ->click('@sort-name')
                ->waitForText($latestProject->name)
                ->assertSeeIn('tr:nth-child(1) td:nth-child(2)', $latestProject->name)
                ->pause(500);

            $this->assertEquals($scrollY, $browser->script('return window.scrollY'));
        });
    }

    /**
     * @test
     */
    public function it_can_change_the_scroll_behaviour_on_pagination()
    {
        $this->browse(function (Browser $browser) {
            $firstProject = Project::orderBy('name')->first();

            // Scroll to top
            $browser->visit('table/relationsAndExports')
                ->resize(1920, 540)
                ->click('@pagination-2')
                ->waitUntilMissingText($firstProject->name)
                ->pause(750);

            $this->assertEquals([0], $browser->script('return window.scrollY'));

            // Scroll to head
            $browser->visit('table/relationsAndExports?paginationScroll=head')
                ->resize(1920, 540)
                ->click('@pagination-2')
                ->waitUntilMissingText($firstProject->name)
                ->pause(750);

            $this->assertEquals([true], $browser->script('return window.scrollY > 0'));

            // Preserve scroll
            $browser->visit('table/relationsAndExports?paginationScroll=preserve')
                ->resize(1920, 540)
                ->scrollTo('@pagination-2')
                ->click('@pagination-2')
                ->waitUntilMissingText($firstProject->name)
                ->pause(750);

            $this->assertEquals([true], $browser->script('return window.scrollY > 300'));
        });
    }
}
