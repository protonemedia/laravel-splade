<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class Meta implements Arrayable, JsonSerializable
{
    public function __construct(private string $key, private array $attributes)
    {
    }

    public function render(): string
    {
        $attributes = collect($this->attributes)->map(function ($value, $key) {
            return "{$key}=\"{$value}\"";
        })->implode(' ');

        return "<meta {$attributes} />";
    }

    public function toArray(): array
    {
        return $this->attributes;
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
