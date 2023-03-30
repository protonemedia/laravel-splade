<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\App;

class ResolvableData
{
    /**
     * Takes a callable that might be resolved.
     *
     * @param  callable  $callable
     */
    public function __construct(private $callable)
    {
        $this->callable = $callable;
    }

    /**
     * Helper method the wrap non-callable values into a callable.
     *
     * @param  mixed  $value
     */
    public static function from($value): static
    {
        return new static(
            is_callable($value) ? $value : fn () => $value
        );
    }

    /**
     * Resolves the callable based on the given boolean.
     *
     * @return mixed
     */
    public function resolveIf(bool $shouldResolve)
    {
        return $shouldResolve
            ? App::call($this->callable)
            : null;
    }
}
