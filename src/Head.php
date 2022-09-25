<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use JsonSerializable;

class Head implements Arrayable, JsonSerializable
{
    private string $title;

    private array $meta = [];

    /**
     * Creates a new instance and sets the defaults from the config.
     */
    public function __construct()
    {
        $this
            ->title(config('splade.seo.defaults.title'))
            ->description(config('splade.seo.defaults.description'))
            ->keywords(config('splade.seo.defaults.keywords'));
    }

    /**
     * Setter for the title.
     *
     * @param  string  $title
     * @param  bool  $withPrefixAndSuffix
     * @return self
     */
    public function title(string $title, bool $withPrefixAndSuffix = true): self
    {
        $this->title = trim(implode(' ', [
            $withPrefixAndSuffix ? trim(config('splade.seo.title_prefix')) : '',

            trim($title),

            $withPrefixAndSuffix ? trim(config('splade.seo.title_suffix')) : '',
        ]));

        return $this;
    }

    /**
     * Setter for the description.
     *
     * @param  string  $description
     * @return self
     */
    public function description(string $description): self
    {
        return $this->metaByName('description', trim($description));
    }

    /**
     * Setter for the keywords.
     *
     * @param  mixed  $keywords
     * @return self
     */
    public function keywords(mixed $keywords): self
    {
        if (is_string($keywords)) {
            $keywords = trim($keywords);
        } else {
            $keywords = collect($keywords)
                ->map(fn ($keyword) => trim($keyword))
                ->unique()
                ->implode(', ');
        }

        return $this->metaByName('keywords', $keywords);
    }

    /**
     * Sets a meta tag by its name attribute.
     *
     * @param  string  $name
     * @param  string  $content
     * @return self
     */
    public function metaByName(string $name, string $content): self
    {
        return $this->meta(['name' => $name, 'content' => $content]);
    }

    /**
     * Sets a meta tag by its property attribute.
     *
     * @param  string  $property
     * @param  string  $content
     * @return self
     */
    public function metaByProperty(string $property, string $content): self
    {
        return $this->meta(['property' => $property, 'content' => $content]);
    }

    /**
     * Sets a meta tag by the given attributes.
     *
     * @param  array  $attributes
     * @return self
     */
    public function meta(array $attributes): self
    {
        if ($value = data_get($attributes, 'name')) {
            $key = "name.{$value}";
        } elseif ($value = data_get($attributes, 'property')) {
            $key = "property.{$value}";
        } else {
            $key = Str::uuid()->toString();
        }

        $this->meta[$key] = new Meta($key, $attributes);

        return $this;
    }

    /**
     * Renders a Title tag with the title.
     *
     * @return string
     */
    private function renderTitle(): string
    {
        return "<title>{$this->title}</title>";
    }

    /**
     * Renders all meta tags.
     *
     * @return string
     */
    private function renderMeta(): string
    {
        return collect($this->meta)->map(function (Meta $meta) {
            return $meta->render();
        })->implode(PHP_EOL);
    }

    /**
     * Returns a HtmlString with the title and the meta tags.
     *
     * @return \Illuminate\Contracts\Support\Htmlable
     */
    public function renderHead(): Htmlable
    {
        return new HtmlString($this->renderTitle() . PHP_EOL . $this->renderMeta());
    }

    /**
     * Returns an array with the title and meta tags.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'meta'  => array_values($this->meta),
        ];
    }

    /**
     * Returns the array from the 'toArray' method.
     *
     * @return mixed
     */
    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
