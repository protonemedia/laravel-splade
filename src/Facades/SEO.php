<?php

namespace ProtoneMedia\Splade\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static self description(string $description)
 * @method static self keywords(mixed $keywords)
 * @method static self meta(array $attributes)
 * @method static self metaByName(string $name, string $content)
 * @method static self metaByProperty(string $name, string $content)
 * @method static self title(string $title, bool $withPrefixAndSuffix = true)
 */
class SEO extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-splade-seo';
    }
}
