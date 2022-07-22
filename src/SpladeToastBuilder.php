<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Traits\ForwardsCalls;

class SpladeToastBuilder
{
    use ForwardsCalls;

    public function __construct(private SpladeCore $splade)
    {
    }

    public function __call($method, $parameters)
    {
        return $this->forwardCallTo(
            $this->splade->toast(),
            $method,
            $parameters
        );
    }
}
