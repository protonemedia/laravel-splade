<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class Meta implements Arrayable, JsonSerializable
{
    /**
     * Creates a new instance.
     *
     * @param  array  $attributes
     */
    public function __construct(
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
     * Returns a boolean whether the given attributes match.
     *
     * @param  array  $attributes
     * @return bool
     */
    public function hasAllAttributes(array $attributes): bool
    {
        foreach ($attributes as $key => $value) {
            if (!array_key_exists($key, $this->attributes)) {
                return false;
            }

            if ($this->attributes[$key] !== $value) {
                return false;
            }
        }

        return true;
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

    /**
     * Dynamic getter for the attributes.
     *
     * @param  string  $key
     * @return mixed
     */
    public function __get(string $key)
    {
        return $this->attributes[$key] ?? null;
    }
}
