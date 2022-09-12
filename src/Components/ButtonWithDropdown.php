<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class ButtonWithDropdown extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public string $scope = 'dropdown')
    {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $prefix = config('splade.blade.component_prefix');

        if ($prefix) {
            $prefix .= '-';
        }

        return view('splade::button-with-dropdown', [
            'wrapperName' => $prefix . 'dropdown',
        ]);
    }
}
