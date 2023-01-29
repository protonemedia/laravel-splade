<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use Illuminate\Support\Arr;
use ProtoneMedia\Splade\Components\Form\InteractsWithFormElement;

abstract class Component
{
    use InteractsWithFormElement;

    public string $basename = '';
    protected string $name = '';
    protected string $label = '';
    protected array $attributes = [];
    protected string $help = '';
    public array|string $rules = ['nullable'];

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->basename = static::dottedName($name);
    }

    /**
     * Create a new form field
     *
     * @param string $name
     * @return static
     */
    static function make(string $name): static
    {
        return new static($name);
    }

    /**
     * Add a label to the field
     *
     * @param string $label
     * @return $this
     */
    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Add a help text to the field
     *
     * @param bool $required
     * @return $this
     */
    public function help(string $text): self
    {
        $this->help = $text;

        return $this;
    }

    /**
     * Add a placeholder to the field
     *
     * @param bool $required
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
     * @param bool $required
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
     * @param bool $required
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
     * @param bool $required
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
     * Adds one or more validation rules to an input field
     *
     * @param mixed ...$rules One or more rules, may be an array of strings or multiple strings
     *
     * @return $this
     */
    function rules(...$rules): self
    {
        $rules = Arr::flatten($rules);

        $this->rules = collect($rules)->map(function($item) {
            if (!is_string($item)) {
                return $item;
            }
            return explode('|', $item);
        })->flatten()->toArray();

        return $this;
    }

    abstract public function render();
}
