<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\AbstractForm;
use ProtoneMedia\Splade\SpladeForm;

class Formbuilder extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public SpladeForm|AbstractForm|string $for
    ) {
        $for = is_string($for) ? app($for) : $for;

        $this->for = $for instanceof AbstractForm
            ? $for->build()
            : $for;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.formbuilder', [
            'form' => $this->for,
        ]);
    }
}
