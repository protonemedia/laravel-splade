<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\FormSelectOption;

class Select extends Component
{
    use InteractsWithFormElement;

    private static bool|array $defaultChoicesOptions = false;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public $options = [],
        public string $label = '',
        public bool|string $placeholder = '',
        public bool $multiple = false,
        public bool|array|string|null $choices = null,
        public string $validationKey = '',
        public bool $showErrors = true,
        public bool $relation = false,
        public string $help = '',
    ) {
        if (is_bool($placeholder) && $placeholder) {
            $this->placeholder = __('Search') . '...';
        }

        if ($this->choices === null) {
            $this->choices = static::$defaultChoicesOptions;
        }

        Form::allowAttribute($name);

        if ($relation) {
            Form::parseEloquentRelation($name);
        }

        if ($multiple) {
            // This removes the last '[]' from the name.
            $this->validationKey = static::dottedName($name);
        }
    }

    /**
     * Enable Choices.js globally for all selects elements, optionally with default options.
     *
     * @param  array|bool  $options
     * @return void
     */
    public static function defaultChoices(bool|array $options = true)
    {
        static::$defaultChoicesOptions = $options;
    }

    /**
     * Returns the JSON representation of the Choices.js options.
     *
     * @return string
     */
    public function jsChoicesOptions(): string
    {
        return is_string($this->choices) ? $this->choices : '{}';
    }

    /**
     * Returns an array with Choices.js options. If Choices.js won't
     * be used, it returns a negative boolean.
     *
     * @return bool|array
     */
    public function choicesOptions(): bool|array
    {
        if ($this->choices === false) {
            return false;
        }

        return array_merge(
            [
                'allowHTML'        => false,
                'itemSelectText'   => '',
                'removeItemButton' => true,
                'shouldSort'       => false,
            ],
            is_array(static::$defaultChoicesOptions) ? static::$defaultChoicesOptions : [],
            is_array($this->choices) ? $this->choices : [],
        );
    }

    /**
     * This maps each option into a FormSelectOption instance.
     *
     * @param  mixed  $options
     * @return array
     */
    private function mapOptions($options): array
    {
        $collection = Collection::make($options);

        $options = $collection->toArray();

        // Check for a "list" array, so something like [1, 2, 3].
        // We'll transform this into [1 => 1, 2 => 2, 3 => 3].
        if (Arr::isList($options) && $collection->filter(fn ($option) => is_string($option))->count() === count($options)) {
            $options = array_combine($options, $options);
        }

        return $collection->map(function ($label, $value) {
            if (!is_array($label)) {
                // A "regular" select option.
                return new FormSelectOption([
                    'value' => $value,
                    'label' => $label,
                ]);
            }

            // The label itself is an array with a 'value' and 'label' key.
            if (array_key_exists('value', $label) && array_key_exists('label', $label)) {
                return new FormSelectOption($label);
            }

            // A nested optgroup.
            return new FormSelectOption([
                'label'   => $value,
                'options' => $this->mapOptions($label),
            ]);
        })->all();
    }

    /**
     * Maps the options and prepends a placeholder when necessary.
     *
     * @return array
     */
    public function options(): array
    {
        $options = $this->mapOptions($this->options);

        if ($this->placeholder) {
            $options = Arr::prepend($options, new FormSelectOption([
                'value'       => '',
                'label'       => $this->placeholder,
                'disabled'    => $this->choices === false,
                'placeholder' => $this->choices !== false,
            ]));
        } elseif (!$this->placeholder && $this->choices !== false && !$this->multiple) {
            $options = Arr::prepend($options, new FormSelectOption([
                'label'       => '',
                'value'       => '',
                'placeholder' => true,
            ]));
        }

        return $options;
    }

    /**
     * Determines whether the given value is selected. It's a
     * workaround for a Vue bug. See also Form::selected().
     *
     * @param  mixed  $value
     * @return bool
     */
    public function selected($value): bool
    {
        return Form::selected($this->name, $value);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.select');
    }
}
