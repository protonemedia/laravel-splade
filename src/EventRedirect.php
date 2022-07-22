<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use JsonSerializable;

class EventRedirect implements Arrayable, JsonSerializable
{
    private string $uuid;

    private array $with = [];

    public function __construct(private string $target)
    {
        $this->uuid = Str::uuid()->toString();
        $this->update();
    }

    public function toArray()
    {
        return ['splade.redirect' => $this->signedUrl()];
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    public function with($key, $value): self
    {
        Arr::set($this->with, $key, value($value));

        $this->update();

        return $this;
    }

    private function update()
    {
        Cache::put(static::class . $this->uuid, $this->data(), 30);
    }

    public function signedUrl()
    {
        return URL::signedRoute('splade.eventRedirect', ['uuid' => $this->uuid]);
    }

    public function data()
    {
        return [
            'uuid'   => $this->uuid,
            'target' => $this->target,
            'with'   => $this->with,
        ];
    }
}
