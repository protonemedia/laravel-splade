<?php

namespace ProtoneMedia\Splade\Precompilers;

use ProtoneMedia\Splade\BladeHelpers;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Http\PrepareTableCells;

class CustomTableCell implements Precompiler
{
    /**
     * Replaces the <x-splace-cell> component with the @cell directive.
     */
    public function __invoke(string $view): string
    {
        $view = preg_replace_callback(BladeHelpers::regexForTag(SpladeComponent::tag('table')), function ($table) {
            $tableHtml    = $table[0];
            $tableOpening = $table[1];

            preg_match_all(PrepareTableCells::HTML_ATTRIBUTES_REGEX, $tableOpening, $matches, PREG_SET_ORDER);

            $arguments = collect($matches)->mapWithKeys(function ($match) use (&$tableOpening) {
                $attribute = $match['attribute'];
                $value     = $match['value'] ?? null;

                if ($value && in_array($attribute, ['as', 'key', 'use'])) {
                    // Remove these attributes from the table tag, so Vue won't be mad.
                    $tableOpening = str_replace($match[0], '', $tableOpening);

                    return [$attribute => PrepareTableCells::stripQuotes($value)];
                }

                return [];
            });

            // Replace the original tag opening with the modified one, without the attributes.
            $tableHtml = str_replace($table[1], $tableOpening, $tableHtml);

            // Replace the custom cells.
            return PrepareTableCells::replaceCellComponentWithCellDirective(
                $tableHtml,
                $arguments->get('as', '$item'),
                $arguments->get('key', '$key'),
                $arguments->get('use', ''),
            );
        }, $view);

        return $view;
    }
}
