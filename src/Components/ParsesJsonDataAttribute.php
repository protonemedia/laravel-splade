<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use JsonSerializable;
use ProtoneMedia\Splade\Transformer;

trait ParsesJsonDataAttribute
{
    /**
     * Tries to parse the given $data into an array.
     *
     * @param  mixed  $data
     * @return mixed
     */
    public function parseJsonData($data = null)
    {
        if ($data === null) {
            return;
        }

        if (is_array($data) || is_object($data)) {
            $data = app(Transformer::class)($data);
        }

        if ($data instanceof Jsonable) {
            return json_decode($data->toJson(), true);
        }

        if ($data instanceof JsonSerializable) {
            return json_decode(json_encode($data), true);
        }

        if ($data instanceof Arrayable) {
            return $data->toArray();
        }

        if (is_array($data)) {
            return $data;
        }

        $decoded = rescue(fn () => json_decode($data, true), null, false);

        if ($decoded) {
            return $decoded;
        }

        return null;
    }
}
