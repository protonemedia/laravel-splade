<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;

class TransitionAnimation implements Arrayable
{
    /**
     * Creates a new instance.
     */
    public function __construct(
        private string $name,
        private string $enter,
        private string $enterFrom,
        private string $enterTo,
        private string $leave,
        private string $leaveFrom,
        private string $leaveTo
    ) {
    }

    /**
     * Getter for the name.
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Returns an array with all data.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'enter'      => $this->enter,
            'enter-from' => $this->enterFrom,
            'enter-to'   => $this->enterTo,
            'leave'      => $this->leave,
            'leave-from' => $this->leaveFrom,
            'leave-to'   => $this->leaveTo,
        ];
    }
}
