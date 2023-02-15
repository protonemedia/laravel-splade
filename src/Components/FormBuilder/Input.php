<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Input as SpladeInput;

class Input extends Component
{
    private array|bool $date = false;
    private array|bool $time = false;
    private bool $range = false;
    private string $append = '';
    private string $prepend = '';
    protected string $type = 'text';

    /**
     * Set the input type
     *
     * @param string $type
     * @return $this
     */
    public function type(string $type = 'text'): self
    {
        $this->type = $type;

        if (in_array($type, ['date', 'time'])) {
            $this->{$type} = true;
        }

        return $this;
    }

    /**
     * Set the minlenght
     *
     * @param int $value
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
     * @param int $value
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
     * @param int $value
     * @return $this
     */
    public function length(int $value): self
    {
        $this->minLength($value)->maxLength($value);

        return $this;
    }

    /**
     * Set the min-value (for input type: number)
     *
     * @param int $value
     * @return $this
     */
    public function minValue(int $value): self
    {
        $this->attributes['min'] = $value;

        return $this;
    }

    /**
     * Set the max-value (for input type: number)
     *
     * @param int $value
     * @return $this
     */
    public function maxValue(int $value): self
    {
        $this->attributes['max'] = $value;

        return $this;
    }

    /**
     * Set the min-value to 0 (for input type: number)
     *
     * @param int $value
     * @return $this
     */
    public function unsigned(): self
    {
        $this->minValue(0);

        return $this;
    }

    /**
     * Set the step-size (for input type: number)
     *
     * @param int $value
     * @return $this
     */
    public function step($step = 1): self
    {
        $this->attributes['step'] = $step;

        return $this;
    }

    /**
     * Changes the input into a datepicker
     * Provide an array like `['showMonths' => 2]` to set Flatpickr-options
     *
     * @param array|bool $options
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
     * @param array|bool $options
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
    public function render()
    {
        $object = new SpladeInput(
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

        if ($this->date || $this->time) {
            $object->defaultFlatpickr($this->{$this->type});
        }

        $object->withAttributes($this->attributes);

        return $object->render()->with($object->data());
    }
}