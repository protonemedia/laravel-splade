<?php

namespace ProtoneMedia\Splade\Facades;

use Closure;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Support\Facades\Facade;
use ProtoneMedia\Splade\DataStore;
use ProtoneMedia\Splade\EventRedirectFactory;
use ProtoneMedia\Splade\EventRefresh;
use ProtoneMedia\Splade\SpladeToast;
use Symfony\Component\HttpFoundation\Response;

/**
 * @method static array getShared()
 * @method static array getToasts()
 * @method static bool dontRefreshPage()
 * @method static bool isLazyRequest()
 * @method static bool isRehydrateRequest()
 * @method static bool isModalRequest()
 * @method static bool isSpladeRequest()
 * @method static bool preserveScroll()
 * @method static Closure exceptionHandler(Handler $exceptionHandler)
 * @method static EventRedirectFactory redirectOnEvent()
 * @method static EventRefresh refreshOnEvent()
 * @method static int getLazyComponentKey()
 * @method static int getRehydrateComponentKey()
 * @method static mixed onInit($value)
 * @method static mixed onLazy($value)
 * @method static self defaultToast(callable $toastFactory):
 * @method static ?callable getCustomToastFactory(callable $toastFactory):
 * @method static self reset()
 * @method static self setModalKey(string $key)
 * @method static self setRootView(string $view)
 * @method static self share($key, $value)
 * @method static SpladeToast toast(string $message = '')
 * @method static SpladeToast toastOnEvent(string $message = '')
 * @method static string getModalKey()
 * @method static string modalType()
 * @method static Response redirectAway(string $targetUrl)
 * @method static array getDataStores()
 * @method static self addDataStore(DataStore $store)
 * @method static self resetDataStores()
 * @method static self requireTransformer($value = true)
 * @method static self transformUsing($class, $transformer = null)
 * @method static mixed findTransformerFor(array|object $instance)
 * @method static self defaultModalCloseExplicitly(bool $value = true)
 * @method static bool getDefaultModalCloseExplicitly()
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
