<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Illuminate\View\ViewName;
use ProtoneMedia\Splade\Components\SpladeComponent;

class PrepareTableCells
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
     * Registers the 'renderWithTableCellComponents' macro that replaces the
     * lazy-component in a template with a placeholder (on initial request).
     * On the lazy request itself, it return the rendered lazy-component.
     *
     * @return self
     */
    public function registerMacro(): self
    {
        View::macro('renderWithTableCellComponents', function () {
            /** @var View $this */
            $view = file_get_contents($this->getPath());

            $defaultAs  = '$item';
            $defaultKey = '$key';
            $defaultUse = '';

            preg_replace_callback(
                PrepareViewWithLazyComponents::regexForTag(SpladeComponent::tag('table')),
                function ($table) use (&$defaultAs, &$defaultKey, &$defaultUse) {
                    $pattern = '/
                        (?<attribute>[\w\-:.@]+)
                        (
                            =
                            (?<value>
                                (
                                    \"[^\"]+\"
                                    |
                                    \\\'[^\\\']+\\\'
                                    |
                                    [^\s>]+
                                )
                            )
                        )?
                    /x';

                    if (!preg_match_all($pattern, $table[1], $matches, PREG_SET_ORDER)) {
                        return $table[0];
                    }

                    collect($matches)->each(function ($match) use (&$defaultAs, &$defaultKey, &$defaultUse) {
                        $attribute = $match['attribute'];
                        $value     = $match['value'] ?? null;

                        if ($attribute === SpladeComponent::tag('cell')) {
                            return;
                        }

                        if (!$value) {
                            return;
                        }

                        $value = PrepareTableCells::stripQuotes($value);

                        if ($attribute === 'as') {
                            return $defaultAs = $value;
                        }

                        if ($attribute === 'key') {
                            return $defaultKey = $value;
                        }

                        if ($attribute === 'use') {
                            return $defaultUse = $value;
                        }
                    });
                },
                $view
            );

            $view = preg_replace_callback(
                PrepareViewWithLazyComponents::regexForTag(SpladeComponent::tag('cell')),
                function ($cell) use ($defaultAs, $defaultKey, $defaultUse) {
                    $contents = Str::beforeLast(Str::after($cell[0], $cell[1]), $cell[3]);

                    $pattern = '/
                    (?<attribute>[\w\-:.@]+)
                    (
                        =
                        (?<value>
                            (
                                \"[^\"]+\"
                                |
                                \\\'[^\\\']+\\\'
                                |
                                [^\s>]+
                            )
                        )
                    )?
                /x';

                    if (!preg_match_all($pattern, $cell[1], $matches, PREG_SET_ORDER)) {
                        return $cell[0];
                    }

                    $name = null;
                    $as   = $defaultAs;
                    $key  = $defaultKey;
                    $use  = $defaultUse;

                    collect($matches)->each(function ($match) use (&$name, &$as, &$key, &$use) {
                        $attribute = $match['attribute'];
                        $value     = $match['value'] ?? null;

                        if ($attribute === SpladeComponent::tag('cell')) {
                            return;
                        }

                        if (!$value && !$name) {
                            return $name = $match[0];
                        }

                        if (!$value) {
                            return;
                        }

                        $value = PrepareTableCells::stripQuotes($value);

                        if ($attribute === 'as') {
                            return $as = $value;
                        }

                        if ($attribute === 'key') {
                            return $key = $value;
                        }

                        if ($attribute === 'use') {
                            return $use = $value;
                        }
                    });

                    return "@cell('{$name}', [{$as}, {$key}], [$use]) {$contents} @endcell";
                },
                $view
            );

            return Blade::render($view, $this->getData());
        });

        return $this;
    }

    /**
     * Strip any quotes from the given string.
     *
     * @param  string  $value
     * @return string
     */
    public static function stripQuotes(string $value): string
    {
        return Str::startsWith($value, ['"', '\''])
                    ? substr($value, 1, -1)
                    : $value;
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

            if (!preg_match(static::regexForTag(SpladeComponent::tag('cell')), $contents, $match)) {
                // No lazy components
                return;
            }

            if ($view->_spladeIsRendering) {
                // Prevent the loop
                return;
            }

            // We set this variable to prevent a loop that occurs when the event is fired again.
            $view->_spladeIsRendering = true;

            tap(new HtmlString($view->renderWithTableCellComponents()), function ($html) use ($view) {
                $view->_spladeEvaluatedHtml = $html;
                $view->_spladeIsRendering   = false;

                $view->setPath(
                    $view->getFactory()->getFinder()->find(ViewName::normalize('splade::html'))
                );
            });
        });

        return $this;
    }
}
