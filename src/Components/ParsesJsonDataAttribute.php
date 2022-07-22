<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use JsonSerializable;

trait ParsesJsonDataAttribute
{
    public function parseJsonData($data = null)
    {
        if (!$data) {
            return;
        }

        if ($data instanceof Jsonable) {
            return json_decode($data->toJson());
        }

        if ($data instanceof JsonSerializable) {
            return json_decode(json_encode($data));
        }

        if ($data instanceof Arrayable) {
            return $data->toArray();
        }

        if (is_array($data)) {
            return $data;
        }

        $decoded = rescue(fn () => json_decode($data), null, false);

        if ($decoded) {
            return $decoded;
        }

        return null;
    }
}
