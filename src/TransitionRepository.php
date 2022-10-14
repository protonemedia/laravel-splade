<?php

namespace ProtoneMedia\Splade;

class TransitionRepository
{
    private $animations = [];

    /**
     * Adds an animation to this repository.
     *
     * @param  \ProtoneMedia\Splade\TransitionAnimation  $transitionAnimation
     * @return $this
     */
    public function add(TransitionAnimation $transitionAnimation): self
    {
        $this->animations[$transitionAnimation->getName()] = $transitionAnimation;

        return $this;
    }

    /**
     * Instantiates a new animations and adds it.
     *
     * @param  string  $name
     * @param  string  $enter
     * @param  string  $enterFrom
     * @param  string  $enterTo
     * @param  string  $leave
     * @param  string  $leaveFrom
     * @param  string  $leaveTo
     * @return $this
     */
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

    /**
     * Returns the animation with the given name.
     *
     * @param  string  $name
     * @return \ProtoneMedia\Splade\TransitionAnimation
     */
    public function get(string $name): TransitionAnimation
    {
        return $this->animations[$name];
    }

    /**
     * Gathers all used classes in all animations and returns them as an array.
     *
     * @return array
     */
    public function classes(): array
    {
        return collect($this->animations)->flatMap(function (TransitionAnimation $transitionAnimation) {
            $classes = implode(' ', $transitionAnimation->toArray());

            return explode(' ', $classes);
        })->unique()->sort()->values()->all();
    }
}
