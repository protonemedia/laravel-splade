<?php

namespace Tests\Browser\Bridge;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class MethodTest extends DuskTestCase
{
    /** @test */
    public function it_can_call_a_php_method_without_losing_state()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/bridge/method')
                ->waitForText('BridgeMethod')
                ->assertSeeIn('@counter', '1')
                ->press('Increment')
                ->waitForTextIn('@counter', '2')
                ->type('name', 'New Project')
                ->press('Increment')
                ->waitForTextIn('@counter', '3')
                ->assertValue('input[name="name"]', 'New Project');
        });
    }

    /** @test */
    public function it_can_call_a_php_method_with_arguments()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/bridge/arguments')
                ->waitForText('BridgeArguments')
                ->assertPresent('@project-0')
                ->assertNotPresent('@project-1')
                ->press('Add three projects')
                ->waitFor('@project-1')
                ->assertSee('Added 3 projects')
                ->assertPresent('@project-2')
                ->assertPresent('@project-3');
        });
    }

    /** @test */
    public function it_can_save_eloquent_models_and_refresh_the_state()
    {
        $this->browse(function (Browser $browser) {
            $initialProjects = Project::count();

            $browser->visit('/bridge/arguments')
                ->waitForText('BridgeArguments')
                ->assertPresent('@project-0')
                ->type('name-0', 'New Project')
                ->press('Save without redirect')
                ->waitForText('Saved 1 project');

            $this->assertEquals($initialProjects + 1, Project::count());

            $browser->press('Add three projects')
                ->waitFor('@project-1')
                ->assertValue('input[name="name-0"]', 'New Project')
                ->type('name-0', 'Updated Project 1')
                ->type('name-1', 'New Project 2')
                ->press('Save with redirect')
                ->waitForRoute('navigation.one');

            $this->assertEquals($initialProjects + 2, Project::count());

            $lastTwoProjects = Project::orderBy('id', 'desc')->take(2)->get();

            $this->assertEquals('Updated Project 1', $lastTwoProjects[1]->name);
            $this->assertEquals('New Project 2', $lastTwoProjects[0]->name);
        });
    }
}
