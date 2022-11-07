<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Facades\Blade;
use Illuminate\View\Component;
use Illuminate\View\View;
use ProtoneMedia\Splade\SpladeCore;

class Modal extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public SpladeCore $splade,
        public bool $closeButton = true,
        public string $name = '',
        public bool $modal = false,
        public bool $slideover = false,
    ) {
        if (!$modal && !$slideover) {
            $this->modal = true;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        if ($this->name) {
            return function (array $data) {
                $modalView = $this->getModalView();

                $content = Blade::render(
                    $this->modal ? 'splade::modal' : 'splade::slideover',
                    array_merge($data, $modalView->getData())
                );

                return view('splade::preloaded-modal', [
                    'name' => $this->name,
                    'html' => $content,
                    'type' => $this->modal ? 'modal' : 'slideover',
                ]);
            };
        }

        if ($this->splade->isModalRequest()) {
            return $this->getModalView();
        }

        return '{{ $slot }}';
    }

    private function getModalView(): View
    {
        return view(
            $this->splade->getModalType() === SpladeCore::MODAL_TYPE_MODAL ? 'splade::modal' : 'splade::slideover',
            [
                'closeButton' => $this->closeButton,
                'modalKey'    => $this->splade->getModalKey(),
                'wrapperName' => SpladeComponent::normalize('modal-wrapper'),
                'name'        => $this->name,
            ]
        );
    }
}
