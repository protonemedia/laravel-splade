<?php

namespace App\View\Components;

use App\Models\Organization;
use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\WithVue;
use ProtoneMedia\Splade\Facades\Toast;

class Repeater extends Component
{
    use WithVue;

    public function __construct(public Collection $projects)
    {
        if ($this->projects->isEmpty()) {
            // Start with a single empty project
            $this->projects->push(new Project(['organization_id' => Organization::valueOrFail('id')]));
        }
    }

    public function add($count = 1)
    {
        foreach (range(1, $count) as $i) {
            $this->projects->push(new Project(['organization_id' => Organization::valueOrFail('id')]));
        }

        Toast::info('Added ' . $count . ' project' . ($count > 1 ? 's' : ''));
    }

    public function save($redirect = false)
    {
        $this->projects->each(function (Project $project) {
            $project->name ? $project->save() : $project->delete();
        });

        if ($redirect) {
            return redirect()->route('navigation.one');
        } else {
            Toast::success('Saved ' . $this->projects->count() . ' project' . ($this->projects->count() > 1 ? 's' : ''));
        }
    }
}
