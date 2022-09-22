<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\App;

class ResolvableData
{
    public function __construct(private $callable)
    {
        $this->callable = $callable;
    }

    public static function from($value)
    {
        return new static(
            is_callable($value) ? $value : fn () => $value
        );
    }

    public function resolveIf(bool $shouldResolve)
    {
        return $shouldResolve
            ? App::call($this->callable)
            : null;
    }
}
