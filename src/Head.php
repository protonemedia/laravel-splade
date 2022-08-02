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

    public function __construct()
    {
        $this
            ->title(config('splade.seo.defaults.title'))
            ->description(config('splade.seo.defaults.description'))
            ->keywords(config('splade.seo.defaults.keywords'));
    }

    public function title(string $title, bool $withPrefixAndSuffix = true): self
    {
        $this->title = trim(implode(' ', [
            $withPrefixAndSuffix ? trim(config('splade.seo.title_prefix')) : '',

            trim($title),

            $withPrefixAndSuffix ? trim(config('splade.seo.title_suffix')) : '',
        ]));

        return $this;
    }

    public function description(string $description): self
    {
        return $this->metaByName('description', trim($description));
    }

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

    public function metaByName(string $name, string $content): self
    {
        return $this->meta(['name' => $name, 'content' => $content]);
    }

    public function metaByProperty(string $property, string $content): self
    {
        return $this->meta(['property' => $property, 'content' => $content]);
    }

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

    private function renderTitle(): string
    {
        return "<title>{$this->title}</title>";
    }

    private function renderMeta(): string
    {
        return collect($this->meta)->map(function (Meta $meta) {
            return $meta->render();
        })->implode(PHP_EOL);
    }

    public function renderHead(): Htmlable
    {
        return new HtmlString($this->renderTitle() . PHP_EOL . $this->renderMeta());
    }

    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'meta'  => array_values($this->meta),
        ];
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
