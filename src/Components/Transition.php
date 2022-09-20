<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\TransitionRepository;

class Transition extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public string $show, private string $animation = 'default', public string $scope = 'transition')
    {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $transitionRepository = app(TransitionRepository::class);

        return view('splade::transition', [
            'animation' => $transitionRepository->get('default'),
        ]);
    }
}
