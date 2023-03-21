<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class EventRefresh implements Arrayable, JsonSerializable
{
    private $preserveScroll = false;

    /**
     * Returns an array with the 'splade.refresh' key.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'splade.refresh'        => true,
            'splade.preserveScroll' => $this->preserveScroll,
        ];
    }

    /**
     * Preserve the scroll value on refresh.
     *
     * @return $this
     */
    public function preserveScroll(bool $value = true): self
    {
        $this->preserveScroll = $value;

        return $this;
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
