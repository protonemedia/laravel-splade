<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Event extends Component
{
    use ParsesJsonDataAttribute;

    public array $listeners;

    /**
     * Create a new component instance.
     */
    public function __construct(
        public mixed $listen,
        public string $scope = '{ subscribed, events }',
        public bool $preserveScroll = false,
  ) {
        $this->listeners = $this->parseListeners($listen);
    }

    /**
     * Parses the given 'listen' attribute.
     *
     * @return void
     */
    private function parseListeners(mixed $listen)
    {
        if (!is_string($listen)) {
            return $this->parseJsonData($listen);
        }

        return collect(explode(',', $listen))
            ->map(fn ($key) => trim($key))
            ->all();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.event');
    }
}
