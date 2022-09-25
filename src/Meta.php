<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class Meta implements Arrayable, JsonSerializable
{
    /**
     * Creates a new instance.
     *
     * @param  string  $key
     * @param  array  $attributes
     */
    public function __construct(
        private string $key,
        private array $attributes
    ) {
    }

    /**
     * Renders the meta tag with all attributes.
     *
     * @return string
     */
    public function render(): string
    {
        $attributes = collect($this->attributes)->map(function ($value, $key) {
            return "{$key}=\"{$value}\"";
        })->implode(' ');

        return "<meta {$attributes} />";
    }

    /**
     * Returns an array with all attributes.
     *
     * @return array
     */
    public function toArray(): array
    {
        return $this->attributes;
    }

    /**
     * Returns the array from the 'toArray' method.
     *
     * @return array
     */
    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
