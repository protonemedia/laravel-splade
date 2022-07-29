<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\SpladeCore;

class Modal extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public SpladeCore $splade, public bool $closeButton = true)
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

        return $this->splade->isModalRequest()
            ? view(
                $this->splade->modalType() === SpladeCore::MODAL_TYPE_MODAL ? 'splade::modal' : 'splade::slideover',
                [
                    'closeButton' => $this->closeButton,
                    'modalKey'    => $this->splade->getModalKey(),
                    'wrapperName' => $prefix . 'modal-wrapper',
                ]
            )
            : '{{ $slot }}';
    }
}
