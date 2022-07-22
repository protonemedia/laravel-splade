<?php

namespace ProtoneMedia\Splade\Facades;

use Closure;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Support\Facades\Facade;
use ProtoneMedia\Splade\EventRedirectFactory;
use ProtoneMedia\Splade\EventRefresh;
use ProtoneMedia\Splade\SpladeToast;

/**
 * @method static array getShared()
 * @method static array getToasts()
 * @method static bool isModalRequest()
 * @method static bool isRefreshRequest()
 * @method static bool isSpladeRequest()
 * @method static Closure exceptionHandler(Handler $exceptionHandler)
 * @method static EventRedirectFactory redirectOnEvent()
 * @method static EventRefresh refreshOnEvent()
 * @method static self reset()
 * @method static self setModalKey(string $key)
 * @method static self share($key, $value)
 * @method static self SpladeToast toast(string $message = '')
 * @method static SpladeToast toastOnEvent(string $message = '')
 * @method static string getModalKey()
 * @method static string modalType()
 *
 * @see \ProtoneMedia\Splade\SpladeCore
 */
class Splade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-splade';
    }
}
