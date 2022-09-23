<?php

namespace ProtoneMedia\Splade\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static self title(string $title)
 * @method static self message(string $message)
 * @method static self backdrop(bool $value = true)
 * @method static self autoDismiss(int $afterSeconds = 15)
 * @method static self position(string $x, string $y)
 * @method static self leftTop(string $message = '')
 * @method static self centerTop(string $message = '')
 * @method static self rightTop(string $message = '')
 * @method static self leftCenter(string $message = '')
 * @method static self center(string $message = '')
 * @method static self rightCenter(string $message = '')
 * @method static self leftBottom(string $message = '')
 * @method static self centerBottom(string $message = '')
 * @method static self rightBottom(string $message = '')
 * @method static self info(string $message = '')
 * @method static self success(string $message = '')
 * @method static self warning(string $message = '')
 * @method static self danger(string $message = '')
 * @method static self style(string $style)
 *
 * @see \ProtoneMedia\Splade\SpladeToast
 */
class Toast extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-splade-toast';
    }
}
