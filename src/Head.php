<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Macroable;
use JsonSerializable;
use ProtoneMedia\Splade\SEO\OpenGraph;
use ProtoneMedia\Splade\SEO\Twitter;

class Head implements Arrayable, JsonSerializable
{
    use Macroable;
    use OpenGraph;
    use Twitter;

    private bool $autoFillOverwrite = false;

    private string $title = '';

    private ?string $canonical = null;

    private array $meta = [];

    /**
     * Creates a new instance and sets the defaults from the config.
     */
    public function __construct()
    {
        $this->fillOpenGraphDefaults();
        $this->fillTwitterDefaults();

        $this
            ->title(config('splade.seo.defaults.title') ?: '')
            ->description(config('splade.seo.defaults.description') ?: '')
            ->keywords(config('splade.seo.defaults.keywords') ?: '');

        if (config('splade.seo.auto_canonical_link')) {
            $this->canonical(request()->fullUrl());
        }

        $this->autoFillOverwrite = true;
    }

    /**
     * Use the traits the fill the meta properties with the default data.
     *
     * @return self
     */
    private function autoFill(): self
    {
        if ($this->autoFillOverwrite) {
            $this->autoFillOpenGraph();
            $this->autoFillTwitter();
        }

        return $this;
    }

    /**
     * Setter for the title.
     *
     * @param  string  $title
     * @param  bool  $withPrefixAndSuffix
     * @return $this
     */
    public function title(string $title, bool $withPrefixAndSuffix = true): self
    {
        $title     = trim($title);
        $prefix    = trim(config('splade.seo.title_prefix'));
        $suffix    = trim(config('splade.seo.title_suffix'));
        $separator = trim(config('splade.seo.title_separator'));

        $withPrefix = $withPrefixAndSuffix && $prefix && $prefix !== $title;
        $withSuffix = $withPrefixAndSuffix && $suffix && $suffix !== $title;

        $this->title = implode(' ', array_filter([
            $withPrefix ? $prefix : false,
            $withPrefix ? $separator : false,
            $title,
            $withSuffix ? $separator : false,
            $withSuffix ? $suffix : false,
        ]));

        return $this->autoFill();
    }

    /**
     * Setter for the canonical URL.
     *
     * @param  string  $url
     * @return $this
     */
    public function canonical(string $url): self
    {
        $this->canonical = $url;

        return $this;
    }

    /**
     * Setter for the description.
     *
     * @param  string  $description
     * @return $this
     */
    public function description(string $description): self
    {
        $this->metaByName('description', trim($description));

        return $this->autoFill();
    }

    /**
     * Setter for the keywords.
     *
     * @param  mixed  $keywords
     * @return $this
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

        $this->metaByName('keywords', $keywords);

        return $this->autoFill();
    }

    /**
     * Sets a meta tag by its name attribute.
     *
     * @param  string  $name
     * @param  string  $content
     * @return $this
     */
    public function metaByName(string $name, string $content): self
    {
        $content = trim($content);

        if (!$content) {
            return $this;
        }

        return $this->meta(['name' => $name, 'content' => $content]);
    }

    /**
     * Sets a meta tag by its property attribute.
     *
     * @param  string  $property
     * @param  string  $content
     * @return $this
     */
    public function metaByProperty(string $property, string $content): self
    {
        $content = trim($content);

        if (!$content) {
            return $this;
        }

        return $this->meta(['property' => $property, 'content' => $content]);
    }

    /**
     * Sets a meta tag by the given attributes.
     *
     * @param  array  $attributes
     * @return $this
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
     * Get a Meta instance by name.
     *
     * @param  string  $name
     * @return Meta|null
     */
    public function getMetaByName(string $name): ?Meta
    {
        $key = "name.{$name}";

        return $this->meta[$key] ?? null;
    }

    /**
     * Get a Meta instance by property.
     *
     * @param  string  $property
     * @return Meta|null
     */
    public function getMetaByProperty(string $property): ?Meta
    {
        $key = "property.{$property}";

        return $this->meta[$key] ?? null;
    }

    /**
     * Getter for the title.
     *
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
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
        return Collection::make($this->meta)
            ->map(fn (Meta $meta) => $meta->render())
            ->when($this->canonical, function (Collection $collection, string $href) {
                $collection->prepend(
                    "<link rel=\"canonical\" href=\"{$href}\">"
                );
            })
            ->implode(PHP_EOL);
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
