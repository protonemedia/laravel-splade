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
    public function __construct(public mixed $listen, public string $scope = '{ subscribed, events }')
    {
        if (!is_string($listen)) {
            $this->listeners = $this->parseJsonData($listen);
            
            return;
        }

        $this->listeners = collect(explode(',', $listen))
            ->map('trim')
            ->all();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::event');
    }
}
