<?php

namespace ProtoneMedia\Splade\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static self title(string $title)
 * @method static self message(string $title)
 * @method static self backdrop(bool $value = true)
 * @method static self autoDismiss(int $afterSeconds = 15)
 * @method static self position(string $x, string $y)
 * @method static self leftTop()
 * @method static self centerTop()
 * @method static self rightTop()
 * @method static self leftCenter()
 * @method static self center()
 * @method static self rightCenter()
 * @method static self leftBottom()
 * @method static self centerBottom()
 * @method static self rightBottom()
 * @method static self info()
 * @method static self success()
 * @method static self warning()
 * @method static self danger()
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
