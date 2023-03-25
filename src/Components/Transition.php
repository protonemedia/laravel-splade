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
        private bool $unmount = true,
        private bool $child = false,
        private string $afterLeave = '',
        private bool|string $animate = true,
    ) {
        if (is_bool($animate)) {
            $this->animate = $animate ? 'true' : 'false';
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $transitionRepository = app(TransitionRepository::class);

        return view('splade::functional.transition', [
            'animation'  => $transitionRepository->get($this->animation),
            'child'      => $this->child,
            'show'       => $this->show,
            'appear'     => $this->appear,
            'unmount'    => $this->unmount,
            'afterLeave' => $this->afterLeave,
            'animate'    => $this->animate,
        ]);
    }
}
