<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Str;
use Illuminate\View\View;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Facades\Splade;

class PrepareViewWithRehydrateComponents
{
    use InterceptsCreatingViews;

    /**
     * Registers the 'renderWithPreparedRehydrateComponents' macro that replaces the
     * rehydrate-component in a template with a placeholder (on initial request).
     * On the rehydrate request itself, it return the rendered rehydrate-component.
     *
     * @return $this
     */
    public function registerMacro(): self
    {
        View::macro('renderWithPreparedRehydrateComponents', function () {
            /** @var View $this */
            $view = file_get_contents($this->getPath());

            // Find the rehydrate components within the view
            preg_match_all(PrepareViewWithRehydrateComponents::regexForTag(SpladeComponent::tag('rehydrate')), $view, $matches);

            // Extract the (optional) placeholder
            collect($matches[0] ?? [])->each(function (string $rehydrateComponent) use (&$view) {
                preg_match_all(PrepareViewWithRehydrateComponents::regexForTag('x-slot:placeholder'), $rehydrateComponent, $placeholderMatches);

                $placeholder = $placeholderMatches[0][0] ?? '';

                if (! $placeholder) {
                    return;
                }

                $vuePlaceholder = str_replace($placeholderMatches[1][0], '<template v-slot:placeholder>', $placeholder);
                $vuePlaceholder = str_replace($placeholderMatches[3][0], '</template>', $vuePlaceholder);

                $view = str_replace($placeholder, $vuePlaceholder, $view);
            });

            return Blade::render($view, $this->getData());
        });

        return $this;
    }

    /**
     * Grabs the rehydrate-component from the rendered content and returns it.
     *
     * @param  string  $content
     * @param  int  $componentKey
     * @return string
     */
    public static function extractComponent(string $content, int $componentKey): string
    {
        preg_match_all('/START-SPLADE-REHYDRATE-(\w+)-->/', $content, $matches);

        return (string) collect($matches[1] ?? [])
            ->mapWithKeys(function (string $name) use ($content) {
                $rehydrate = Str::between(
                    $content,
                    "<!--START-SPLADE-REHYDRATE-{$name}-->",
                    "<!--END-SPLADE-REHYDRATE-{$name}-->"
                );

                return [$name => trim($rehydrate)];
            })
            ->get($componentKey);
    }

    /**
     * Registers an event handler for the 'creating:' event, which is fired before
     * rendering a Blade template. This way we can, based on the request, replace
     * the rehydrate components with a placeholder, or with the actual content.
     *
     * @return $this
     */
    public function registerEventListener(): self
    {
        if (Splade::isRehydrateRequest()) {
            // Render normally
            return $this;
        }

        $listener = $this->interceptCreatingViews(SpladeComponent::tag('rehydrate'), function (View $view) {
            return $view->renderWithPreparedRehydrateComponents();
        });

        Event::listen('creating:*', $listener);

        return $this;
    }
}
