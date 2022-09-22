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
    public static function regexForTag($tag): string
    {
        return '/(<\s*' . $tag . '[^>]*>)(.|\n)*?(<\/' . $tag . '>)/';
    }

    public function registerMacros(): self
    {
        View::macro('renderWithPreparedLazyComponents', function () {
            /** @var View $this */
            $view = file_get_contents($this->getPath());

            preg_match_all(PrepareViewWithLazyComponents::regexForTag(SpladeComponent::tag('lazy')), $view, $matches);

            $lazyComponents = collect($matches[0] ?? []);

            if (Splade::isLazyRequest()) {
                return Blade::render(
                    $lazyComponents->get(Splade::getLazyComponentKey()),
                    $this->getData()
                );
            }

            $lazyComponents->each(function (string $lazyComponent, $key) use ($matches, &$view) {
                preg_match_all(PrepareViewWithLazyComponents::regexForTag('x-slot:placeholder'), $lazyComponent, $placeholderMatches);

                $view = str_replace($lazyComponent, implode('', [
                    $matches[1][$key],
                    $placeholderMatches[0][0],
                    $matches[3][$key],
                ]), $view);
            });

            return Blade::render($view, $this->getData());
        });

        return $this;
    }

    public function registerEventListener(): self
    {
        Event::listen('creating:*', function ($event, $data) {
            $view = $data[0] ?? null;

            if (!$view instanceof View) {
                return;
            }

            $contents = file_get_contents($view->getPath());

            if (!preg_match(static::regexForTag(SpladeComponent::tag('lazy')), $contents, $match)) {
                // no lazy components
                return;
            }

            if ($view->_spladeIsLazyRendering) {
                // prevent loop
                return;
            }

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
