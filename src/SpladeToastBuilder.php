<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Traits\ForwardsCalls;

class SpladeToastBuilder
{
    use ForwardsCalls;

    /**
     * Creates a new instance.
     *
     * @param  \ProtoneMedia\Splade\SpladeCore  $splade
     */
    public function __construct(
        private SpladeCore $splade
    ) {
    }

    /**
     * Forwards all calls the a new Toast.
     *
     * @param  string  $method
     * @param  array  $parameters
     * @return \ProtoneMedia\Splade\SpladeToast
     */
    public function __call($method, $parameters)
    {
        return $this->forwardCallTo(
            $this->splade->toast(),
            $method,
            $parameters
        );
    }
}
