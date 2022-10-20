<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\View\View;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Facades\Splade;

class PrepareViewWithLazyComponents
{
    use InterceptsCreatingViews;

    /**
     * Returns a regex pattern to match an HTML tag and its contents.
     *
     * @param  string  $tag
     * @return string
     */
    public static function regexForTag(string $tag): string
    {
        return '/(<\s*' . $tag . '[^>]*>)(.|\n)*?(<\/' . $tag . '>)/';
    }

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

            $lazyComponents = collect($matches[0] ?? []);

            // If this is a lazy request, get the right component and render it.
            if (Splade::isLazyRequest()) {
                return Blade::render(
                    $lazyComponents->get(Splade::getLazyComponentKey()),
                    $this->getData()
                );
            }

            // Otherwise, replace all lazy components with just the placeholder
            $lazyComponents->each(function (string $lazyComponent, $key) use ($matches, &$view) {
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
     * Registers an event handler for the 'creating:' event, which is fired before
     * rendering a Blade template. This way we can, based on the request, replace
     * the lazy components with a placeholder, or with the actual content.
     *
     * @return $this
     */
    public function registerEventListener(): self
    {
        $listener = $this->interceptCreatingViews(SpladeComponent::tag('lazy'), function (View $view) {
            return $view->renderWithPreparedLazyComponents();
        });

        Event::listen('creating:*', $listener);

        return $this;
    }
}
