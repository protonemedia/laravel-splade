<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Input as SpladeInput;

class Input extends Component
{
    protected array|bool $date = false;

    protected array|bool $time = false;

    protected bool $range = false;

    protected string $append = '';

    protected string $prepend = '';

    protected string $type = 'text';

    /**
     * Set the minlenght
     *
     * @return $this
     */
    public function minLength(int $value): self
    {
        $this->attributes['minlength'] = $value;

        return $this;
    }

    /**
     * Set the maxlenght
     *
     * @return $this
     */
    public function maxLength(int $value): self
    {
        $this->attributes['maxlength'] = $value;

        return $this;
    }

    /**
     * Set both minlenght and maxlength to the same value
     *
     * @return $this
     */
    public function length(int $value): self
    {
        $this->minLength($value)->maxLength($value);

        return $this;
    }

    /**
     * Changes the input into a datepicker
     * Provide an array like `['showMonths' => 2]` to set Flatpickr-options
     *
     * @return $this
     */
    public function date(array|bool $options = true): self
    {
        $this->date = $options;

        return $this;
    }

    /**
     * Changes the input into a timepicker
     * Provide an array like `['time_24hr' => false]` to set Flatpickr-options
     *
     * @return $this
     */
    public function time(array|bool $options = true): self
    {
        $this->time = $options;

        return $this;
    }

    /**
     * Enables selecting a range of dates
     *
     * Only available together with a Date-type field
     *
     * @return $this
     */
    public function range(): self
    {
        $this->range = true;

        return $this;
    }

    /**
     * Changes the input into a hidden field
     *
     * @return $this
     */
    public function hidden(): self
    {
        $this->type = 'hidden';

        return $this;
    }

    /**
     * Changes the input into an email field
     *
     * @return $this
     */
    public function email(): self
    {
        $this->type = 'email';

        return $this;
    }

    /**
     * Changes the input into a password field
     *
     * @return $this
     */
    public function password(): self
    {
        $this->type = 'password';

        return $this;
    }

    /**
     * Changes the input into a number field
     *
     * @return $this
     */
    public function integer(): self
    {
        $this->type = 'number';

        return $this;
    }

    /**
     * Changes the input into a number field
     *
     * @return $this
     */
    public function number(): self
    {
        $this->type = 'number';

        return $this;
    }

    /**
     * Changes the input into a number field
     *
     * @return $this
     */
    public function numeric(): self
    {
        $this->type = 'number';

        return $this;
    }

    /**
     * Changes the input into a colorpicker field
     *
     * @return $this
     */
    public function color(): self
    {
        $this->type = 'color';

        return $this;
    }

    /**
     * Adds a readonly placeholder with the given text before the input field
     *
     * @return $this
     */
    public function append(string $text): self
    {
        $this->append = $text;

        return $this;
    }

    /**
     * Adds a readonly placeholder with the given text after the input field
     *
     * @return $this
     */
    public function prepend(string $text): self
    {
        $this->prepend = $text;

        return $this;
    }

    /**
     * Renders the SpladeInput
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeInput(
            name:    $this->name,
            type:    $this->type,
            label:   $this->label,
            date:    $this->date || $this->type === 'date',
            time:    $this->time || $this->type === 'time',
            range:   $this->range,
            prepend: $this->prepend,
            append:  $this->append,
            help:    $this->help
        );
    }
}
