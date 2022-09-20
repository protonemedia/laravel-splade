<?php

namespace ProtoneMedia\Splade;

class TransitionAnimation
{
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

    public function getName(): string
    {
        return $this->name;
    }

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
