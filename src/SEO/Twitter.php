<?php

namespace ProtoneMedia\Splade\SEO;

trait Twitter
{
    /**
     * Fill the Twitter meta tags from the configuration.
     *
     * @return void
     */
    protected function fillTwitterDefaults()
    {
        $this
            ->twitterCard(config('splade.seo.twitter.card') ?: '')
            ->twitterSite(config('splade.seo.twitter.site') ?: '')
            ->twitterTitle(config('splade.seo.twitter.title') ?: '')
            ->twitterDescription(config('splade.seo.twitter.description') ?: '')
            ->twitterImage(config('splade.seo.twitter.image') ?: '');
    }

    /**
     * Update the Twitter Title and Description based on the regular title.
     *
     * @return void
     */
    protected function autoFillTwitter()
    {
        if (!config('splade.seo.twitter.auto_fill')) {
            return;
        }

        if ($this->title) {
            $this->twitterTitle($this->title);
        }

        if ($meta = $this->getMetaByName('description')->first()) {
            $this->twitterDescription($meta->content);
        }
    }

    /**
     * Setter for the 'twitter:card' Meta Name.
     */
    public function twitterCard(string $value): self
    {
        $this->metaByName('twitter:card', trim($value));

        return $this;
    }

    /**
     * Setter for the 'twitter:site' Meta Name.
     */
    public function twitterSite(string $value): self
    {
        $this->metaByName('twitter:site', trim($value));

        return $this;
    }

    /**
     * Setter for the 'twitter:title' Meta Name.
     */
    public function twitterTitle(string $value): self
    {
        $this->metaByName('twitter:title', trim($value));

        return $this;
    }

    /**
     * Setter for the 'twitter:description' Meta Name.
     */
    public function twitterDescription(string $value): self
    {
        $this->metaByName('twitter:description', trim($value));

        return $this;
    }

    /**
     * Setter for the 'twitter:image' Meta Name.
     */
    public function twitterImage(string $value): self
    {
        $this->metaByName('twitter:image', trim($value));

        return $this;
    }
}
