<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class Input extends Component
{
    use InteractsWithFormElement;

    private static $defaultDateFormat = 'Y-m-d';

    private static $defaultTimeFormat = 'H:i';

    private static $defaultDatetimeFormat = 'Y-m-d H:i';

    private static array|bool $defaultFlatpickrOptions = false;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public string $type = 'text',
        public HtmlString|string $label = '',
        private bool|array|string|null $date = null,
        private bool|array|string|null $time = null,
        public string $validationKey = '',
        public bool $showErrors = true,
        private bool $range = false,
        public HtmlString|string $prepend = '',
        public HtmlString|string $append = '',
        public HtmlString|string $help = '',
        public bool $alwaysEnablePrepend = false,
        public bool $alwaysEnableAppend = false,
    ) {
        if ($this->date === null && $this->type === 'date') {
            $this->date = static::$defaultFlatpickrOptions;
        }

        if ($this->time === null && $this->type === 'time') {
            $this->time = static::$defaultFlatpickrOptions;
        }

        if ($this->date || $this->time) {
            // The Flatpickr integration expects a 'text' type input.
            $this->type = 'text';
        }

        Form::allowAttribute($name);
    }

    /**
     * Returns a boolean whether the input type is 'hidden'.
     */
    public function isHidden(): bool
    {
        return $this->type === 'hidden';
    }

    /**
     * Global setter for the default date format for Flatpickr
     *
     * @return void
     */
    public static function defaultDateFormat(string $format)
    {
        static::$defaultDateFormat = $format;
    }

    /**
     * Global setter for the default time format for Flatpickr
     *
     * @return void
     */
    public static function defaultTimeFormat(string $format)
    {
        static::$defaultTimeFormat = $format;
    }

    /**
     * Global setter for the default datetime format for Flatpickr
     *
     * @return void
     */
    public static function defaultDatetimeFormat(string $format)
    {
        static::$defaultDatetimeFormat = $format;
    }

    /**
     * Enable Flatpickr for all date/time input types, optionally with default options.
     *
     * @return void
     */
    public static function defaultFlatpickr(array|bool $options = true)
    {
        static::$defaultFlatpickrOptions = $options;
    }

    /**
     * Returns the JSON representation of the Flatpickr options.
     */
    public function jsFlatpickrOptions(): string
    {
        if (is_string($this->date)) {
            return $this->date;
        }

        if (is_string($this->time)) {
            return $this->time;
        }

        return '{}';
    }

    /**
     * Returns an array with Flatpickr options. If Flatpickr won't
     * be used, it returns a negative boolean.
     */
    public function flatpickrOptions(): bool|array
    {
        if (!$this->date && !$this->time) {
            return false;
        }

        return array_merge(
            [
                'dateFormat'      => $this->date && $this->time ? static::$defaultDatetimeFormat : ($this->date ? static::$defaultDateFormat : static::$defaultTimeFormat),
                'enableTime'      => $this->time ? true : false,
                'mode'            => $this->range ? 'range' : 'single',
                'noCalendar'      => $this->date ? false : true,
                'position'        => 'left',
                'static'          => true,
                'time_24hr'       => true,
                'minuteIncrement' => 1,
            ],
            is_array(static::$defaultFlatpickrOptions) ? static::$defaultFlatpickrOptions : [],
            is_array($this->date) ? $this->date : [],
            is_array($this->time) ? $this->time : [],
        );
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.input');
    }
}
