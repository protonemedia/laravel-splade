<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Str;
use Illuminate\View\View;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Facades\Splade;

class PrepareViewWithLazyComponents
{
    use InterceptsCreatingViews;

    /**
     * Registers the 'renderWithPreparedLazyComponents' macro that replaces the
     * lazy-component in a template with a placeholder (on initial request).
     * On the lazy request itself, it return the rendered lazy-component.
     *
     * @return $this
     */
    public function registerMacro(): self
    {
        View::macro('renderWithPreparedLazyComponents', function () {
            /** @var View $this */
            $view = file_get_contents($this->getPath());

            // Find the lazy components within the view
            preg_match_all(PrepareViewWithLazyComponents::regexForTag(SpladeComponent::tag('lazy')), $view, $matches);

            // Replace all lazy components with just the placeholder
            collect($matches[0] ?? [])->each(function (string $lazyComponent, $key) use ($matches, &$view) {
                preg_match_all(PrepareViewWithLazyComponents::regexForTag('x-slot:placeholder'), $lazyComponent, $placeholderMatches);

                $view = str_replace($lazyComponent, implode('', [
                    $matches[1][$key],
                    $placeholderMatches[0][0] ?? '',
                    $matches[3][$key],
                ]), $view);
            });

            return Blade::render($view, $this->getData());
        });

        return $this;
    }

    /**
     * Grabs the lazy-component from the rendered content and returns it.
     *
     * @param  string  $content
     * @param  int  $componentKey
     * @return string
     */
    public static function extractComponent(string $content, int $componentKey): string
    {
        preg_match_all('/START-SPLADE-LAZY-(\w+)-->/', $content, $matches);

        return (string) collect($matches[1] ?? [])
            ->mapWithKeys(function (string $name, $key) use ($content) {
                $rehydrate = Str::between(
                    $content,
                    "<!--START-SPLADE-LAZY-{$name}-->",
                    "<!--END-SPLADE-LAZY-{$name}-->"
                );

                return [$key => trim($rehydrate)];
            })
            ->get($componentKey);
    }

    /**
     * Registers an event handler for the 'creating:' event, which is fired before
     * rendering a Blade template. This way we can, based on the request, replace
     * the lazy components with a placeholder, or with the actual content.
     *
     * @return $this
     */
    public function registerEventListener(): self
    {
        if (Splade::isLazyRequest()) {
            // Render normally
            return $this;
        }

        $listener = $this->interceptCreatingViews(SpladeComponent::tag('lazy'), function (View $view) {
            return $view->renderWithPreparedLazyComponents();
        });

        Event::listen('creating:*', $listener);

        return $this;
    }
}
