<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Collection;
use Illuminate\View\Component;

class DataStores extends Component
{
    use ParsesJsonDataAttribute;

    public $scopes;

    public $remember;

    public $localStorage;

    public $parsed;

    public $raw;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        array $stores = []
    ) {
        $stores = Collection::make($stores)->keyBy->name;

        $this->scopes       = $stores->map->name->implode(',');
        $this->remember     = $stores->filter->remember->keys()->all();
        $this->localStorage = $stores->filter->localStorage->keys()->all();

        $this->parsed = (object) $stores->reject->json->map->data->all();
        $this->raw    = (object) $stores->map->json->filter()->all();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.dataStores');
    }
}
