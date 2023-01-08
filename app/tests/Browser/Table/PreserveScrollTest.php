<?php

namespace Tests\Browser\Table;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * @group table
 */
class PreserveScrollTest extends DuskTestCase
{
    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_preserve_the_scroll_value_with_a_form_component($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $latestProject = Project::orderByDesc('id')->first();
            $latestProject->forceFill(['name' => $company = fake()->company])->save();

            $browser
                ->visit('table/preserveScrollForm/' . (int) $spladeQueryBuilder)
                ->resize(1920, 540)
                ->scrollIntoView('tr:nth-child(30)');

            $scrollY = $browser->script('return window.scrollY');

            $this->assertTrue($scrollY > 0);

            $browser->press('tr:nth-child(30) td:nth-child(2) button')
                ->waitForText('Project updated!');

            $this->assertEquals("{$company} updated", $latestProject->fresh()->name);
            $this->assertEquals($scrollY, $browser->script('return window.scrollY'));
        });
    }

    /**
     * @test
     *
     * @dataProvider booleanDataset
     */
    public function it_can_preserve_the_scroll_value_with_a_link_component($spladeQueryBuilder)
    {
        $this->browse(function (Browser $browser) use ($spladeQueryBuilder) {
            $latestProject = Project::orderByDesc('id')->first();
            $latestProject->forceFill(['name' => $company = fake()->company])->save();

            $browser
                ->visit('table/preserveScrollForm/' . (int) $spladeQueryBuilder)
                ->resize(1920, 540)
                ->scrollIntoView('tr:nth-child(30)');

            $scrollY = $browser->script('return window.scrollY');

            $this->assertTrue($scrollY > 0);

            $browser->press('tr:nth-child(30) td:nth-child(2) a')
                ->waitForText('Project updated!');

            $this->assertEquals("{$company} updated", $latestProject->fresh()->name);
            $this->assertEquals($scrollY, $browser->script('return window.scrollY'));
        });
    }
}
