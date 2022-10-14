<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\HtmlString;
use Illuminate\View\View;
use Illuminate\View\ViewName;

trait InterceptsCreatingViews
{
    /**
     * Makes a listener for the 'creating:*' event, so we can interact
     * with the view instance before it gets send as a response.
     *
     * @param  string  $tag
     * @param  callable  $withView
     * @return callable
     */
    protected function interceptCreatingViews(string $tag, callable $withView): callable
    {
        return function ($event, $data) use ($tag, $withView) {
            $view = $data[0] ?? null;

            if (!$view instanceof View) {
                return;
            }

            $contents = file_get_contents($view->getPath());

            if (!preg_match(static::regexForTag($tag), $contents, $match)) {
                // No lazy components
                return;
            }

            $preventLoopVar = '_spladeIsLazyRendering' . $tag;

            if ($view->{$preventLoopVar}) {
                // Prevent the loop
                return;
            }

            // We set this variable to prevent a loop that occurs when the event is fired again.
            $view->{$preventLoopVar} = true;

            tap(new HtmlString($withView($view)), function ($html) use ($view, $preventLoopVar) {
                $view->_spladeEvaluatedHtml = $html;
                $view->{$preventLoopVar}    = false;

                $view->setPath(
                    $view->getFactory()->getFinder()->find(ViewName::normalize('splade::html'))
                );
            });
        };
    }
}
