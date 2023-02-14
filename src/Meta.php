<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Collection;
use JsonSerializable;

class Meta implements Arrayable, JsonSerializable
{
    /**
     * Creates a new instance.
     */
    public function __construct(
        private array $attributes
    ) {
    }

    /**
     * Renders the meta tag with all attributes.
     */
    public function render(): string
    {
        $attributes = collect($this->attributes)->map(function ($value, $key) {
            $value = e($value);

            return "{$key}=\"{$value}\"";
        })->implode(' ');

        return "<meta {$attributes} />";
    }

    /**
     * Returns a boolean whether the given attributes match.
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
     */
    public function toArray(): array
    {
        return Collection::make($this->attributes)
            ->mapWithKeys(function ($value, $key) {
                return [$key => e($value)];
            })
            ->all();
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
     * @return mixed
     */
    public function __get(string $key)
    {
        return $this->attributes[$key] ?? null;
    }
}
