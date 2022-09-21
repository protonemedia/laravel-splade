<?php

namespace ProtoneMedia\Splade;

class TransitionRepository
{
    private $animations = [];

    public function __construct()
    {
    }

    public function add(TransitionAnimation $transitionAnimation): self
    {
        $this->animations[$transitionAnimation->getName()] = $transitionAnimation;

        return $this;
    }

    public function new(
        string $name,
        string $enter,
        string $enterFrom,
        string $enterTo,
        string $leave,
        string $leaveFrom,
        string $leaveTo
    ): self {
        return $this->add(
            new TransitionAnimation($name, $enter, $enterFrom, $enterTo, $leave, $leaveFrom, $leaveTo)
        );
    }

    public function get($name): TransitionAnimation
    {
        return $this->animations[$name];
    }

    public function classes(): array
    {
        return collect($this->animations)->flatMap(function (TransitionAnimation $transitionAnimation) {
            $classes = implode(' ', $transitionAnimation->toArray());

            return explode(' ', $classes);
        })->unique()->sort()->values()->all();
    }
}
