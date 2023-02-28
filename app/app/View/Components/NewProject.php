<?php

namespace App\View\Components;

use App\Models\Project;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\WithVue;

class NewProject extends Component
{
    use WithVue;

    public int $counter = 1;

    public function __construct(
        public ?Project $project = null,
    ) {
        if (!$project) {
            $this->project = new Project;
        }
    }

    public function increment()
    {
        $this->counter++;
    }
}
