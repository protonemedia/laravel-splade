<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Data extends Component
{
    use ParsesJsonDataAttribute;

    public $data;

    public $json;

    public $remember;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($default = null, public string $scope = 'data')
    {
        $parsed = $this->parseJsonData($default);

        if ($parsed) {
            $this->data = $parsed;
        } else {
            $this->json = $default ?: '{}';
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::data', [
            'data' => $this->data,
            'json' => $this->json,
        ]);
    }
}
