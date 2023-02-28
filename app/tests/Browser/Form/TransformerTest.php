<?php

namespace Tests\Browser\Form;

use App\Models\Project;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class TransformerTest extends DuskTestCase
{
    /** @test */
    public function it_can_transform_models_and_relations()
    {
        $this->browse(function (Browser $browser) {
            $project = Project::first();
            $browser->visit('form/components/transform')
                ->waitForText('FormComponents')
                ->assertValue('@name', 'transformed_' . $project->name)
                ->assertValue('@city', 'transformed_' . $project->organization->address->city);
        });
    }
}
