<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Link extends Component
{
    use ParsesJsonDataAttribute;

    public $data;

    public $headers;

    public $jsonData;

    public $jsonHeaders;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($data = null, $headers = null)
    {
        $parsed = $this->parseJsonData($data);

        if ($parsed) {
            $this->data = $parsed;
        } else {
            $this->jsonData = $data ?: '{}';
        }

        //

        $parsed = $this->parseJsonData($headers);

        if ($parsed) {
            $this->headers = $parsed;
        } else {
            $this->jsonHeaders = $headers ?: '{}';
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.link', [
            'data'        => $this->data,
            'jsonData'    => $this->jsonData,
            'headers'     => $this->headers,
            'jsonHeaders' => $this->jsonHeaders,
        ]);
    }
}
