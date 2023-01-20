<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
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

            $rehydrateComponents = collect($matches[0] ?? []);

            // If this is a rehydrate request, get the right component and render it.
            if (Splade::isRehydrateRequest()) {
                return Blade::render(
                    $rehydrateComponents->get(Splade::getRehydrateComponentKey()),
                    $this->getData()
                );
            }

            // Otherwise, extract the (optional) placeholder
            $rehydrateComponents->each(function (string $rehydrateComponent) use (&$view) {
                preg_match_all(PrepareViewWithRehydrateComponents::regexForTag('x-slot:placeholder'), $rehydrateComponent, $placeholderMatches);

                $placeholder = $placeholderMatches[0][0] ?? '';

                if (!$placeholder) {
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
     * Registers an event handler for the 'creating:' event, which is fired before
     * rendering a Blade template. This way we can, based on the request, replace
     * the rehydrate components with a placeholder, or with the actual content.
     *
     * @return $this
     */
    public function registerEventListener(): self
    {
        $listener = $this->interceptCreatingViews(SpladeComponent::tag('rehydrate'), function (View $view) {
            return $view->renderWithPreparedRehydrateComponents();
        });

        Event::listen('creating:*', $listener);

        return $this;
    }
}
