<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Submit as SpladeSubmit;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasValue;

class Button extends Component
{
    use HasValue;

    protected bool $danger = false;

    protected bool $secondary = false;

    protected bool $spinner = true;

    protected string $type = 'button';

    /**
     * Set the @click="..."
     *
     * @return $this
     */
    public function click(string $value): self
    {
        $this->attributes['@click'] = $value;

        return $this;
    }

    /**
     * Set the @click.prevent="..."
     *
     * @return $this
     */
    public function clickPrevent(string $value): self
    {
        $this->attributes['@click.prevent'] = $value;

        return $this;
    }

    /**
     * Applies danger-styling to the button
     *
     * @return $this
     */
    public function danger(bool $danger = true): self
    {
        $this->danger = $danger;

        return $this;
    }

    /**
     * Applies secondary-styling to the button
     *
     * @param  bool  $danger
     * @return $this
     */
    public function secondary(bool $secondary = true): self
    {
        $this->secondary = $secondary;

        return $this;
    }

    /**
     * Renders the SpladeButton
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeSubmit(
            label:     $this->label,
            type:      $this->type,
            spinner:   $this->spinner,
            name:      $this->name,
            value:     $this->value ?? null,
            danger:    $this->danger,
            secondary: $this->secondary
        );
    }
}
