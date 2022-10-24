<?php

namespace ProtoneMedia\Splade\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static self canonical(string $url)
 * @method static self description(string $description)
 * @method static self keywords(mixed $keywords)
 * @method static self meta(array $attributes)
 * @method static self metaByName(string $name, string $content)
 * @method static self metaByProperty(string $name, string $content)
 * @method static self openGraphImage(string $value)
 * @method static self openGraphSiteName(string $value)
 * @method static self openGraphTitle(string $value)
 * @method static self openGraphType(string $value)
 * @method static self openGraphUrl(string $value)
 * @method static self title(string $title, bool $withPrefixAndSuffix = true)
 * @method static self twitterCard(string $value)
 * @method static self twitterDescription(string $value)
 * @method static self twitterImage(string $value)
 * @method static self twitterSite(string $value)
 * @method static self twitterTitle(string $value)
 */
class SEO extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-splade-seo';
    }
}
