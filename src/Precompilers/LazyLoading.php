<?php

namespace ProtoneMedia\Splade\Precompilers;

use Illuminate\Support\Str;
use ProtoneMedia\Splade\BladeHelpers;
use ProtoneMedia\Splade\Components\SpladeComponent;

class LazyLoading implements Precompiler
{
    /**
     * It adds an additional if-statement around the slot, so it's only rendered
     * when the component is lazy-loaded.
     */
    public function __invoke(string $view): string
    {
        // Find the lazy components within the view
        preg_match_all(BladeHelpers::regexForTag(SpladeComponent::tag('lazy')), $view, $matches);

        // Replace all lazy components with just the placeholder
        collect($matches[0] ?? [])->each(function (string $lazyComponent, $key) use ($matches, &$view) {
            preg_match_all(BladeHelpers::regexForTag('x-slot:placeholder'), $lazyComponent, $placeholderMatches);

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

        return $view;
    }
}
