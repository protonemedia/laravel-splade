<?php

namespace ProtoneMedia\Splade\Components\Form;

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
        public string $type = 'text',
        public string $label = '',
        private bool|array|string $date = false,
        private bool|array|string $time = false,
        public string $validationKey = '',
        public bool $showErrors = true,
        private bool $range = false
    ) {
        if ($date === false && $this->type === 'date' && static::$defaultFlatpickrOptions !== false) {
            $this->date = $date = true;
        }

        if ($time === false && $this->type === 'time' && static::$defaultFlatpickrOptions !== false) {
            $this->time = $time = true;
        }

        if ($date || $time) {
            $this->type = 'text';
        }

        Form::allowAttribute($name);
    }

    public function isHidden(): bool
    {
        return $this->type === 'hidden';
    }

    public static function defaultDateFormat(string $format)
    {
        static::$defaultDateFormat = $format;
    }

    public static function defaultTimeFormat(string $format)
    {
        static::$defaultTimeFormat = $format;
    }

    public static function defaultDatetimeFormat(string $format)
    {
        static::$defaultDatetimeFormat = $format;
    }

    public static function defaultFlatpickr(array|bool $options = true)
    {
        static::$defaultFlatpickrOptions = $options;
    }

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

    public function flatpickrOptions(): bool|array
    {
        if (!$this->date && !$this->time) {
            return false;
        }

        return array_merge(
            [
                'dateFormat' => $this->date && $this->time ? static::$defaultDatetimeFormat : ($this->date ? static::$defaultDateFormat : static::$defaultTimeFormat),
                'enableTime' => $this->time ? true : false,
                'mode'       => $this->range ? 'range' : 'single',
                'noCalendar' => $this->date ? false : true,
                'position'   => 'left',
                'static'     => true,
                'time_24hr'  => true,
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
