<?php

namespace ProtoneMedia\Splade\Precompilers;

use ProtoneMedia\Splade\BladeHelpers;
use ProtoneMedia\Splade\Components\SpladeComponent;

class Rehydrate implements Precompiler
{
    /**
     * It adds an additional unless-statement around the placeholder, so it's only rendered
     * when the component is not rehydrated.
     */
    public function __invoke(string $view): string
    {
        // Find the rehydrate components within the view
        preg_match_all(BladeHelpers::regexForTag(SpladeComponent::tag('rehydrate')), $view, $matches);

        // Extract the (optional) placeholder
        collect($matches[0] ?? [])->each(function (string $rehydrateComponent) use (&$view) {
            preg_match_all(BladeHelpers::regexForTag('x-slot:placeholder'), $rehydrateComponent, $placeholderMatches);

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

        return $view;
    }
}
