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
    public function __construct(
        private string $show = '',
        private string $animation = 'default',
        private bool $appear = false,
        private bool $child = false,
        public string $as = 'div',
        private string $afterLeave = '',
        public string $scope = 'transition',
    ) {
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
            'animation'  => $transitionRepository->get($this->animation),
            'child'      => $this->child,
            'show'       => $this->show,
            'appear'     => $this->appear,
            'afterLeave' => $this->afterLeave,
        ]);
    }
}
