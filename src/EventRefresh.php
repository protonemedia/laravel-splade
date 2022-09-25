<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class EventRefresh implements Arrayable, JsonSerializable
{
    /**
     * Returns an array with the 'splade.refresh' key.
     *
     * @return array
     */
    public function toArray()
    {
        return ['splade.refresh' => true];
    }

    /**
     * Returns the same array, but this method is called when broadcasting.
     *
     * @return array
     */
    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
