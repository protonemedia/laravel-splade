<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Js;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\FormSelectOption;

class Select extends Component
{
    use InteractsWithFormElement;

    private static bool|array $defaultChoicesOptions = false;

    private static bool $defaultResetOnNewRemoteUrl = false;

    private static bool $defaultSelectFirstRemoteOption = false;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public $options = [],
        public HtmlString|string $label = '',
        public bool|string $placeholder = '',
        public bool $multiple = false,
        public bool|array|string|null $choices = null,
        public string $validationKey = '',
        public bool $showErrors = true,
        public bool $relation = false,
        public HtmlString|string $help = '',
        public string $remoteUrl = '',
        public string $remoteRoot = '',
        public string $optionValue = '',
        public string $optionLabel = '',
        public string $scope = 'select',
        public bool|null $resetOnNewRemoteUrl = null,
        public bool|null $selectFirstRemoteOption = null,
    ) {
        if ($placeholder === true) {
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

        if (!Str::startsWith($remoteUrl, '`') && !Str::endsWith($remoteUrl, '`')) {
            $this->remoteUrl = Js::from($remoteUrl);
        }

        $this->resetOnNewRemoteUrl = is_bool($resetOnNewRemoteUrl)
            ? $resetOnNewRemoteUrl
            : static::$defaultResetOnNewRemoteUrl;

        $this->selectFirstRemoteOption = is_bool($selectFirstRemoteOption)
            ? $selectFirstRemoteOption
            : static::$defaultSelectFirstRemoteOption;
    }

    /**
     * Enable Choices.js globally for all selects elements, optionally with default options.
     *
     * @return void
     */
    public static function defaultChoices(bool|array $options = true)
    {
        static::$defaultChoicesOptions = $options;
    }

    /**
     * Set the default value for the resetOnNewRemoteUrl property.
     */
    public static function defaultResetOnNewRemoteUrl(bool $value = true)
    {
        static::$defaultResetOnNewRemoteUrl = $value;
    }

    /**
     * Set the default value for the selectFirstRemoteOption property.
     */
    public static function defaultSelectFirstRemoteOption(bool $value = true)
    {
        static::$defaultSelectFirstRemoteOption = $value;
    }

    /**
     * Returns the JSON representation of the Choices.js options.
     */
    public function jsChoicesOptions(): string
    {
        return is_string($this->choices) ? $this->choices : '{}';
    }

    /**
     * Returns an array with Choices.js options. If Choices.js won't
     * be used, it returns a negative boolean.
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
                'placeholderValue' => $this->placeholder ?: '',
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
     */
    private function mapOptions($options): array
    {
        $collection = Collection::make($options);

        if ($this->optionLabel && $this->optionValue) {
            $collection = $collection->pluck($this->optionLabel, $this->optionValue);
        }

        $options = $collection->toArray();

        // Check for a "list" array, so something like [1, 2, 3].
        // We'll transform this into [1 => 1, 2 => 2, 3 => 3].
        if (Arr::isList($options) && $collection->filter(fn ($option) => is_string($option))->count() === count($options)) {
            $collection = Collection::make(array_combine($options, $options));
        }

        return $collection->map(function ($label, $value) {
            if (!is_array($label)) {
                // A "regular" select option.
                return new FormSelectOption([
                    'value' => (string) $value,
                    'label' => (string) $label,
                ]);
            }

            // The label itself is an array with a 'value' and 'label' key.
            if (array_key_exists('value', $label) && array_key_exists('label', $label)) {
                $label['value'] = (string) $label['value'];
                $label['label'] = (string) $label['label'];

                return new FormSelectOption($label);
            }

            // A nested optgroup.
            return new FormSelectOption([
                'label'   => (string) $value,
                'options' => $this->mapOptions($label),
            ]);
        })->all();
    }

    /**
     * Maps the options and prepends a placeholder when necessary.
     */
    public function options(): array
    {
        $options = $this->mapOptions($this->options);

        if ($placeholder = $this->placeholderOption()) {
            $options = Arr::prepend($options, $placeholder);
        }

        return $options;
    }

    /**
     * Returns the placeholder option when necessary.
     *
     * @return \ProtoneMedia\Splade\FormSelectOption
     */
    public function placeholderOption(): ?FormSelectOption
    {
        if ($this->choices && $this->multiple) {
            // Choices.js supports a placeholder for multiple selects
            // using the 'placeholderValue' configuration.
            return null;
        }

        $attributes = [
            'value' => '',
            'label' => $this->placeholder ?: '',
        ];

        if ($this->choices) {
            // Choices.js need a dummy placeholder, otherwise it will select the
            // first option, so we'll always return a placeholder option.
            return new FormSelectOption($attributes + ['placeholder' => true]);
        }

        if (!$this->placeholder) {
            // No placeholder is needed.
            return null;
        }

        // Regular selects need a disabled attribute.
        return new FormSelectOption($attributes + ['disabled' => true]);
    }

    /**
     * Determines whether the given value is selected. It's a
     * workaround for a Vue bug. See also Form::selected().
     *
     * @param  mixed  $value
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
