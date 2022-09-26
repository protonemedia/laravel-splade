<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\HtmlString;
use Illuminate\View\View;
use Illuminate\View\ViewName;
use ProtoneMedia\Splade\Components\SpladeComponent;
use ProtoneMedia\Splade\Facades\Splade;

class PrepareViewWithLazyComponents
{
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
     * @return self
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
     * @return self
     */
    public function registerEventListener(): self
    {
        Event::listen('creating:*', function ($event, $data) {
            $view = $data[0] ?? null;

            if (!$view instanceof View) {
                return;
            }

            $contents = file_get_contents($view->getPath());

            if (!preg_match(static::regexForTag(SpladeComponent::tag('lazy')), $contents, $match)) {
                // No lazy components
                return;
            }

            if ($view->_spladeIsLazyRendering) {
                // Prevent the loop
                return;
            }

            // We set this variable to prevent a loop that occurs when the event is fired again.
            $view->_spladeIsLazyRendering = true;

            tap(new HtmlString($view->renderWithPreparedLazyComponents()), function ($html) use ($view) {
                $view->_spladeEvaluatedHtml   = $html;
                $view->_spladeIsLazyRendering = false;

                $view->setPath(
                    $view->getFactory()->getFinder()->find(ViewName::normalize('splade::html'))
                );
            });
        });

        return $this;
    }
}
