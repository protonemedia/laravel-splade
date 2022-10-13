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
     * Taken from the getAttributesFromAttributeString() method of
     * Laravel's ComponentTagCompiler class.
     */
    const HTML_ATTRIBUTES_REGEX = '/
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
     * Replaces all custom cell components with the @cell directive.
     *
     * @param string $table
     * @param string $defaultAs
     * @param string $defaultKey
     * @param string $defaultUse
     * @return string
     */
    public static function replaceCellComponentWithCellDirective(
        string $table,
        string $defaultAs,
        string $defaultKey,
        string $defaultUse
    ): string {
        $cellTag   = SpladeComponent::tag('cell');
        $cellRegex = static::regexForTag($cellTag);

        return preg_replace_callback($cellRegex, function ($cell) use ($cellTag, $defaultAs, $defaultKey, $defaultUse) {
            $cellHtml    = $cell[0];
            $cellOpening = $cell[1];
            $cellClosing = $cell[3];

            $contents = Str::between($cellHtml, $cellOpening, $cellClosing);

            if (!preg_match_all(PrepareTableCells::HTML_ATTRIBUTES_REGEX, $cellOpening, $matches, PREG_SET_ORDER)) {
                return $cellHtml;
            }

            $arguments = collect($matches)->mapWithKeys(function ($match) use ($cellTag) {
                $attribute = $match['attribute'];
                $value     = $match['value'] ?? null;

                if (!$value && $attribute !== $cellTag) {
                    return ['name' => $attribute];
                }

                if (in_array($attribute, ['as', 'key', 'use'])) {
                    return [$attribute => PrepareTableCells::stripQuotes($value)];
                }

                return [];
            });

            $name = $arguments->get('name');
            $as   = $arguments->get('as', $defaultAs);
            $key  = $arguments->get('key', $defaultKey);
            $use  = $arguments->get('use', $defaultUse);

            return "@cell('{$name}', [{$as}, {$key}], [$use]) {$contents} @endcell";
        }, $table);
    }

    /**
     * Registers the 'renderWithTableCellComponents' macro that replaces the
     * custom cell components with the @cell directive in all tables.
     *
     * @return $this
     */
    public function registerMacro(): self
    {
        View::macro('renderWithTableCellComponents', function () {
            /** @var View $this */
            $view = file_get_contents($this->getPath());

            $regex = PrepareViewWithLazyComponents::regexForTag(
                SpladeComponent::tag('table')
            );

            $view = preg_replace_callback($regex, function ($table) {
                $tableHtml    = $table[0];
                $tableOpening = $table[1];

                preg_match_all(PrepareTableCells::HTML_ATTRIBUTES_REGEX, $tableOpening, $matches, PREG_SET_ORDER);

                $arguments = collect($matches)->mapWithKeys(function ($match) use (&$tableOpening) {
                    $attribute = $match['attribute'];
                    $value     = $match['value'] ?? null;

                    if ($value && in_array($attribute, ['as', 'key', 'use'])) {
                        // Remove these attributes from the table tag, so Vue won't be mad.
                        $tableOpening = str_replace($match[0], '', $tableOpening);

                        return [$attribute => PrepareTableCells::stripQuotes($value)];
                    }

                    return [];
                });

                // Replace the original tag opening with the modified one, without the attributes.
                $tableHtml = str_replace($table[1], $tableOpening, $tableHtml);

                // Replace the custom cells.
                return PrepareTableCells::replaceCellComponentWithCellDirective(
                    $tableHtml,
                    $arguments->get('as', '$item'),
                    $arguments->get('key', '$key'),
                    $arguments->get('use', ''),
                );
            }, $view);

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
     * @return $this
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
