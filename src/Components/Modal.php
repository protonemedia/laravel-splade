<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\View;
use ProtoneMedia\Splade\Facades\Splade;
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
        public bool $opened = false,
        public bool|null $closeExplicitly = null,
    ) {
        if (!$modal && !$slideover) {
            $this->modal = true;
        }

        if (!$name && $opened) {
            $this->name = Str::random();
        }

        if ($closeExplicitly === null) {
            $this->closeExplicitly = Splade::getDefaultModalCloseExplicitly();
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
            // If the name is set, this is a preloaded modal that won't be fetched from the server asyncronously.
            return function (array $data) {
                $content = Blade::render(
                    $this->modal ? 'splade::components.modal' : 'splade::components.slideover',
                    array_merge($data, $this->getModalView()->getData())
                );

                return view('splade::functional.preloaded-modal', [
                    'name'   => $this->name,
                    'html'   => $content,
                    'type'   => $this->modal ? 'modal' : 'slideover',
                    'opened' => $this->opened,
                ]);
            };
        }

        if ($this->splade->isModalRequest()) {
            // Wrap the slot in a modal or slideover.
            return $this->getModalView();
        }

        // Regular request, just render the slot.
        return '{{ $slot }}';
    }

    private function getModalView(): View
    {
        return view(
            $this->splade->getModalType() === SpladeCore::MODAL_TYPE_MODAL ? 'splade::components.modal' : 'splade::components.slideover',
            [
                'closeButton'     => $this->closeButton,
                'closeExplicitly' => $this->closeExplicitly,
                'modalKey'        => $this->splade->getModalKey(),
                'wrapperName'     => SpladeComponent::normalize('modal-wrapper'),
                'name'            => $this->name,
            ]
        );
    }
}
