<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Js;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class Defer extends Component
{
    use ParsesJsonDataAttribute;

    public $data;

    public $json;

    public $requestData;

    public $requestJson;

    public $headers;

    public $jsonHeaders;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        $default = null,
        $request = null,
        public ?int $poll = null,
        public ?string $watchValue = null,
        public int $watchDebounce = 0,
        public bool $manual = false,
        public string $scope = '{ processing, response, reload }',
        public string $url = '',
        $headers = null
    ) {
        $parsed = $this->parseJsonData($default);

        if ($parsed) {
            $this->data = $parsed;
        } else {
            $this->json = $default ?: '{}';
        }

        //

        $parsed = $this->parseJsonData($request);

        if ($parsed) {
            $this->requestData = $parsed;
        } else {
            $this->requestJson = $request ?: '{}';
        }

        if (!Str::startsWith($url, '`') && !Str::endsWith($url, '`')) {
            $this->url = Js::from($url);
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
        return view('splade::functional.defer', [
            'data'        => $this->data,
            'json'        => $this->json,
            'headers'     => $this->headers,
            'jsonHeaders' => $this->jsonHeaders,
        ]);
    }
}
