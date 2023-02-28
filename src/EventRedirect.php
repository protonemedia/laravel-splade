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

    /**
     * Creates a new instance with a fresh UUID.
     */
    public function __construct(private string $target)
    {
        $this->uuid = Str::uuid()->toString();
        $this->update();
    }

    /**
     * Returns an array with the 'splade.redirect' key and a Signed URL
     * that will eventually redirect to the target.
     *
     * @return void
     */
    public function toArray()
    {
        return ['splade.redirect' => $this->signedUrl()];
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

    /**
     * Setter for additional data.
     *
     * @param  mixed  $value
     * @return $this
     */
    public function with(string $key, $value): self
    {
        Arr::set($this->with, $key, value($value));

        $this->update();

        return $this;
    }

    /**
     * Puts the data in the Cache repository for 30 seconds.
     *
     * @return void
     */
    private function update()
    {
        Cache::put(static::class . $this->uuid, $this->data(), 30);
    }

    /**
     * Generates a Signed URL to the 'splade.eventRedirect' route
     * that will eventually redirect to the actual target.
     */
    public function signedUrl(): string
    {
        return URL::signedRoute('splade.eventRedirect', ['uuid' => $this->uuid]);
    }

    /**
     * Returns an array with all data.
     */
    public function data(): array
    {
        return [
            'uuid'   => $this->uuid,
            'target' => $this->target,
            'with'   => $this->with,
        ];
    }
}
