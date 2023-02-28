<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Str;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\CustomBladeCompiler;

class PrepareTableCells
{
    /**
     * Taken from the getAttributesFromAttributeString() method of
     * Laravel's ComponentTagCompiler class.
     */
    const HTML_ATTRIBUTES_REGEX = '/
        (?<attribute>[\w\-:.@]+)
        (
            =
            (?<value>
                (
                    \"[^\"]+\"
                    |
                    \\\'[^\\\']+\\\'
                    |
                    [^\s>]+
                )
            )
        )?
    /x';

    /**
     * Replaces all custom cell components with the @cell directive.
     */
    public static function replaceCellComponentWithCellDirective(
        string $table,
        string $defaultAs,
        string $defaultKey,
        string $defaultUse
    ): string {
        $cellTag   = SpladeComponent::tag('cell');
        $cellRegex = CustomBladeCompiler::regexForTag($cellTag);

        return preg_replace_callback($cellRegex, function ($cell) use ($cellTag, $defaultAs, $defaultKey, $defaultUse) {
            $cellHtml    = $cell[0];
            $cellOpening = $cell[1];
            $cellClosing = $cell[3];

            $contents = Str::between($cellHtml, $cellOpening, $cellClosing);

            if (!preg_match_all(PrepareTableCells::HTML_ATTRIBUTES_REGEX, $cellOpening, $matches, PREG_SET_ORDER)) {
                return $cellHtml;
            }

            $arguments = collect($matches)->mapWithKeys(function ($match) use ($cellTag) {
                $attribute = $match['attribute'];
                $value     = $match['value'] ?? null;

                if (!$value && $attribute !== $cellTag) {
                    return ['name' => $attribute];
                }

                if (in_array($attribute, ['as', 'key', 'use'])) {
                    return [$attribute => PrepareTableCells::stripQuotes($value)];
                }

                return [];
            });

            $name = $arguments->get('name');
            $as   = $arguments->get('as', $defaultAs);
            $key  = $arguments->get('key', $defaultKey);
            $use  = $arguments->get('use', $defaultUse);

            return "@cell('{$name}', [{$as}, {$key}], [$use]) {$contents} @endcell";
        }, $table);
    }

    /**
     * Strip any quotes from the given string.
     */
    public static function stripQuotes(string $value): string
    {
        return Str::startsWith($value, ['"', '\''])
            ? substr($value, 1, -1)
            : $value;
    }
}
