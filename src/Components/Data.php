<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\DataStore;
use ProtoneMedia\Splade\Facades\Splade;

class Data extends Component
{
    use ParsesJsonDataAttribute;

    public $data;

    public $json;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public $default = null,
        public string $scope = 'data',
        public string $store = '',
        public bool|string $remember = false,
        public bool $localStorage = false,
    ) {
        $parsed = $this->parseJsonData($default);

        if ($parsed) {
            $this->data = $parsed;
        } else {
            $this->json = $default ?: '{}';
        }

        if ($remember === true && $store) {
            $this->remember = $store;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        if ($this->store) {
            Splade::addDataStore(new DataStore(
                name: $this->store,
                remember: $this->remember,
                localStorage: $this->localStorage,
                data: $this->data,
                json: $this->json,
            ));

            return '';
        }

        return view('splade::functional.data', [
            'data' => $this->data,
            'json' => $this->json,
        ]);
    }
}
