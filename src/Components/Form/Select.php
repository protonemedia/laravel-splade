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
        public $options = [],
        public string $label = '',
        public bool|string $placeholder = '',
        public bool $multiple = false,
        public bool|array|string $choices = false,
        public string $validationKey = '',
        public bool $showErrors = true,
        public bool $relation = false,
        public string $help = '',
    ) {
        if (is_bool($placeholder) && $placeholder) {
            $this->placeholder = __('Search') . '...';
        }

        if ($this->choices === false && static::$defaultChoicesOptions !== false) {
            $this->choices = true;
        }

        Form::allowAttribute($name);

        if ($relation) {
            Form::parseEloquentRelation($name);
        }

        if ($multiple) {
            $this->validationKey = static::dottedName($name);
        }
    }

    public static function defaultChoices(bool|array $options = true)
    {
        static::$defaultChoicesOptions = $options;
    }

    public function jsChoicesOptions(): string
    {
        return is_string($this->choices) ? $this->choices : '{}';
    }

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

    private function mapOptions($options): array
    {
        $collection = Collection::make($options);

        $options = $collection->toArray();

        if (Arr::isList($options) && $collection->filter(fn ($option) => is_string($option))->count() === count($options)) {
            $options = array_combine($options, $options);
        }

        $mapped = $collection->map(function ($label, $value) {
            if (!is_array($label)) {
                return new FormSelectOption([
                    'value' => $value,
                    'label' => $label,
                ]);
            }

            if (array_key_exists('value', $label) && array_key_exists('label', $label)) {
                return new FormSelectOption($label);
            }

            return new FormSelectOption([
                'label'   => $value,
                'options' => $this->mapOptions($label),
            ]);
        });

        return $mapped->all();
    }

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
