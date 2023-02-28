<?php

namespace ProtoneMedia\Splade\SEO;

trait OpenGraph
{
    /**
     * Fill the Open Graph meta tags from the configuration.
     *
     * @return void
     */
    protected function fillOpenGraphDefaults()
    {
        return $this
            ->openGraphType(config('splade.seo.open_graph.type') ?: '')
            ->openGraphSiteName(config('splade.seo.open_graph.site_name') ?: '')
            ->openGraphTitle(config('splade.seo.open_graph.title') ?: '')
            ->openGraphUrl(config('splade.seo.open_graph.url') ?: '')
            ->openGraphImage(config('splade.seo.open_graph.image') ?: '');
    }

    /**
     * Update the Open Graph Title based on the regular title.
     *
     * @return void
     */
    protected function autoFillOpenGraph()
    {
        if (!config('splade.seo.open_graph.auto_fill')) {
            return;
        }

        if ($this->title) {
            $this->openGraphTitle($this->title);
        }
    }

    /**
     * Setter for the 'og:type' Meta Property.
     */
    public function openGraphType(string $value): self
    {
        return $this->metaByProperty('og:type', $value);
    }

    /**
     * Setter for the 'og:site_name' Meta Property.
     */
    public function openGraphSiteName(string $value): self
    {
        return $this->metaByProperty('og:site_name', $value);
    }

    /**
     * Setter for the 'og:title' Meta Property.
     */
    public function openGraphTitle(string $value): self
    {
        return $this->metaByProperty('og:title', $value);
    }

    /**
     * Setter for the 'og:url' Meta Property.
     */
    public function openGraphUrl(string $value): self
    {
        return $this->metaByProperty('og:url', $value);
    }

    /**
     * Setter for the 'og:image' Meta Property.
     */
    public function openGraphImage(string $value, bool $replace = true): self
    {
        return $this->metaByProperty('og:image', $value, $replace);
    }
}
