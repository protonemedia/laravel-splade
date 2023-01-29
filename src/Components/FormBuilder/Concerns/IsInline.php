<?php

namespace ProtoneMedia\Splade\Components\FormBuilder\Concerns;

trait IsInline
{
    private bool $inline = false;

    /**
     * Should the radios be displayed inline?
     *
     * @param bool $inline
     * @return $this
     */
    public function inline(bool $inline = true): self
    {
        $this->inline = $inline;

        return $this;
    }
}
