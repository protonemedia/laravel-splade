<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Str;
use Illuminate\View\Compilers\BladeCompiler;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Http\PrepareTableCells;

class CustomBladeCompiler extends BladeCompiler
{
    /**
     * This method is overridden to prepare some Splade components before they are compiled.
     *
     * @param  string  $view
     * @return string
     */
    protected function compileComponentTags($view)
    {
        $this->prepareLazyComponents($view);
        $this->prepareRehydrateComponents($view);
        $this->replaceCellComponentWithCellDirective($view);

        return parent::compileComponentTags($view);
    }

    /**
     * Returns a regex pattern to match an HTML tag and its contents.
     */
    public static function regexForTag(string $tag): string
    {
        return '/(<\s*' . $tag . '[^>]*>)(.|\n)*?(<\/' . $tag . '>)/';
    }

    /**
     * Replaces the <x-splace-cell> component with the @cell directive.
     */
    protected function replaceCellComponentWithCellDirective(&$view)
    {
        $view = preg_replace_callback(static::regexForTag(SpladeComponent::tag('table')), function ($table) {
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
    }

    /**
     * It adds an additional unless-statement around the placeholder, so it's only rendered
     * when the component is not rehydrated.
     */
    protected function prepareRehydrateComponents(&$view)
    {
        // Find the rehydrate components within the view
        preg_match_all(static::regexForTag(SpladeComponent::tag('rehydrate')), $view, $matches);

        // Extract the (optional) placeholder
        collect($matches[0] ?? [])->each(function (string $rehydrateComponent) use (&$view) {
            preg_match_all(static::regexForTag('x-slot:placeholder'), $rehydrateComponent, $placeholderMatches);

            $placeholder = $placeholderMatches[0][0] ?? '';

            if (!$placeholder) {
                return;
            }

            $vuePlaceholder = str_replace($placeholderMatches[1][0], '<template v-slot:placeholder>', $placeholder);
            $vuePlaceholder = str_replace($placeholderMatches[3][0], '</template>', $vuePlaceholder);

            $vuePlaceholder = implode(PHP_EOL, [
                '@unless(\ProtoneMedia\Splade\Facades\Splade::isRehydrateRequest())',
                $vuePlaceholder,
                '@endunless',
            ]);

            $view = str_replace($placeholder, $vuePlaceholder, $view);
        });
    }

    /**
     * It adds an additional if-statement around the slot, so it's only rendered
     * when the component is lazy-loaded.
     */
    protected function prepareLazyComponents(&$view)
    {
        // Find the lazy components within the view
        preg_match_all(static::regexForTag(SpladeComponent::tag('lazy')), $view, $matches);

        // Replace all lazy components with just the placeholder
        collect($matches[0] ?? [])->each(function (string $lazyComponent, $key) use ($matches, &$view) {
            preg_match_all(static::regexForTag('x-slot:placeholder'), $lazyComponent, $placeholderMatches);

            $innerLazy = Str::between($lazyComponent, $matches[1][$key], $matches[3][$key]);

            $placeholder = $placeholderMatches[0][0] ?? '';

            $innerLazyWithoutPlaceholder = $placeholder ? str_replace($placeholder, '', $innerLazy) : $innerLazy;

            $newLazyComponent = implode(PHP_EOL, array_filter([
                $matches[1][$key],
                $placeholder,
                '@if(\ProtoneMedia\Splade\Facades\Splade::isLazyRequest())',
                $innerLazyWithoutPlaceholder,
                '@endif',
                $matches[3][$key],
            ]));

            $view = str_replace($lazyComponent, $newLazyComponent, $view);
        });
    }
}
