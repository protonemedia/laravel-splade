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
        public SpladeForm|AbstractForm|string $form
    ) {
        $form = is_string($form) ? app($form) : $form;

        $this->form = $form instanceof AbstractForm
            ? $form->build()
            : $form;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.formbuilder', [
            'form' => $this->form,
        ]);
    }
}
