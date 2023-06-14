<?php

namespace ProtoneMedia\Splade\FormBuilder;

use Illuminate\Support\Arr;
use ProtoneMedia\Splade\Components\Form\Submit as SpladeSubmit;
use ProtoneMedia\Splade\FormBuilder\Concerns\HasValue;

class Button extends Component
{
    use HasValue;

    protected bool $danger = false;

    protected string $wrapperClass = '';

    protected bool $secondary = false;

    protected bool $spinner = true;

    protected string $type = 'button';

    /**
     * Applies danger-styling to the button.
     *
     * @return $this
     */
    public function danger(bool $danger = true): self
    {
        $this->danger = $danger;

        return $this;
    }

    /**
     * Add one or more classes to the fields' wrapper.
     *
     * @param  array|string  $classes
     * @return $this
     */
    public function wrapperClass(...$classes): self
    {
        $classes = Arr::flatten($classes);

        $this->wrapperClass = Arr::toCssClasses($classes);

        return $this;
    }

    /**
     * Applies secondary-styling to the button.
     *
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
            label: $this->label,
            type: $this->type,
            spinner: $this->spinner,
            name: $this->name,
            value: $this->value ?? null,
            danger: $this->danger,
            secondary: $this->secondary,
            wrapperClass: $this->wrapperClass
        );
    }
}
