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

    public function date(array|bool $options = true): self
    {
        $this->date = $options;

        return $this;
    }

    public function time(array|bool $options = true): self
    {
        $this->time = $options;

        return $this;
    }

    public function range(): self
    {
        $this->range = true;

        return $this;
    }

    public function hidden(): self
    {
        $this->type = 'hidden';

        return $this;
    }

    public function email(): self
    {
        $this->type = 'email';

        return $this;
    }

    public function password(): self
    {
        $this->type = 'password';

        return $this;
    }

    public function integer(): self
    {
        $this->type = 'number';

        return $this;
    }

    public function number(): self
    {
        $this->type = 'number';

        return $this;
    }

    public function numeric(): self
    {
        $this->type = 'number';

        return $this;
    }

    public function color(): self
    {
        $this->type = 'color';

        return $this;
    }

    public function append(string $text): self
    {
        $this->append = $text;

        return $this;
    }

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
