<?php

namespace ProtoneMedia\Splade\FormBuilder\Concerns;

trait CanBeInline
{
    protected bool $inline = false;

    /**
     * Should the radios be displayed inline?
     *
     * @return $this
     */
    public function inline(bool $inline = true): self
    {
        $this->inline = $inline;

        return $this;
    }
}
