<?php

namespace ProtoneMedia\Splade\FormBuilder;

use Illuminate\Support\Arr;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Traits\Macroable;
use ProtoneMedia\Splade\Components\Form\InteractsWithFormElement;

abstract class Component
{
    use InteractsWithFormElement;
    use Macroable;

    public string $dottedName = '';

    protected string $name = '';

    protected HtmlString|string $label = '';

    protected array $attributes = [];

    protected HtmlString|string $help = '';

    public array|string $rules = [];

    public function __construct(string $name)
    {
        $this->name       = $name;
        $this->dottedName = static::dottedName($name);
    }

    /**
     * Create a new form field
     */
    public static function make(string $name): static
    {
        return new static($name);
    }

    /**
     * Add a label to the field
     *
     * @return $this
     */
    public function label(HtmlString|string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Add a label to the field that won't be escaped
     *
     * @return $this
     */
    public function htmlLabel(HtmlString|string $label): self
    {
        return $this->label(is_string($label) ? new HtmlString($label) : $label);
    }

    /**
     * Add one or more classes to the field
     *
     * @param  array|string  $classes
     * @return $this
     */
    public function class(...$classes): self
    {
        $classes = Arr::flatten($classes);

        $this->attributes['class'] = Arr::toCssClasses($classes);

        return $this;
    }

    /**
     * Add an id to the field
     *
     * @return $this
     */
    public function id(string $id): self
    {
        $this->attributes['id'] = $id;

        return $this;
    }

    /**
     * Add a help text to the field
     *
     * @return $this
     */
    public function help(HtmlString|string $text): self
    {
        $this->help = $text;

        return $this;
    }

    /**
     * Add a help text to the field that won't be escaped
     *
     * @return $this
     */
    public function htmlHelp(HtmlString|string $text): self
    {
        return $this->help(is_string($text) ? new HtmlString($text) : $text);
    }

    /**
     * Add a placeholder to the field
     *
     * @return $this
     */
    public function placeholder(string $placeholder = ''): self
    {
        $this->attributes['placeholder'] = $placeholder;

        return $this;
    }

    /**
     * Make the field disabled
     *
     * @return $this
     */
    public function disabled(bool $disabled = true): self
    {
        if ($disabled) {
            $this->attributes['disabled'] = 'disabled';
        }

        return $this;
    }

    /**
     * Make the field readonly
     *
     * @return $this
     */
    public function readonly(bool $readonly = true): self
    {
        if ($readonly) {
            $this->attributes['readonly'] = 'readonly';
        }

        return $this;
    }

    /**
     * Make the field required
     *
     * @return $this
     */
    public function required(bool $required = true): self
    {
        if ($required) {
            $this->rules[] = 'required';
        }

        return $this;
    }

    /**
     * Helper method to add additional attributes to the field.
     */
    public function attributes(array $attributes): self
    {
        $this->attributes = array_merge($this->attributes, $attributes);

        return $this;
    }

    /**
     * Adds one or more validation rules to an input field
     *
     * @param  mixed  ...$rules One or more rules, may be an array of strings or multiple strings
     * @return $this
     */
    public function rules(...$rules): self
    {
        $rules = Arr::flatten($rules);

        $this->rules = collect($rules)->map(function ($item) {
            if (!is_string($item)) {
                return $item;
            }

            return explode('|', $item);
        })->flatten()->toArray();

        return $this;
    }

    abstract public function toSpladeComponent();

    public function render()
    {
        return ($object = $this->toSpladeComponent())
            ->withAttributes($this->attributes)
            ->render()
            ->with($object->data())
            ->with(['slot' => '']);
    }
}
