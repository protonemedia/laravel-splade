<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class EventRefresh implements Arrayable, JsonSerializable
{
    public function toArray()
    {
        return ['splade.refresh' => true];
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
