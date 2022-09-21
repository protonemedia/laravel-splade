<?php

namespace ProtoneMedia\Splade\Facades;

use Illuminate\Support\Facades\Facade;
use ProtoneMedia\Splade\TransitionAnimation;

/**
 * @method static self add(TransitionAnimation $transitionAnimation)
 * @method static self new(string $name, string $enter, string $enterFrom, string $enterTo, string $leave, string $leaveFrom, string $leaveTo)
 *
 * @see \ProtoneMedia\Splade\TransitionRepository
 */
class Animation extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-splade-transition-repository';
    }
}
