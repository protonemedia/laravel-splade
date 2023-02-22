<?php

namespace Tests\Unit\Bridge;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\WithVue;

class DummyComponent extends Component
{
    use WithVue;

    public $name = 'Laravel';

    public function setName($name = 'Tailwind')
    {
        $this->name = $name;
    }
}
