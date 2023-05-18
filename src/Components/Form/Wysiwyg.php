<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

class Wysiwyg extends Component
{
    use InteractsWithFormElement;

    private static bool|array $defaultJoditOptions = false;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $vModel = '',
        public HtmlString|string $label = '',
        public string $validationKey = '',
        public bool $showErrors = true,
        public HtmlString|string $help = '',
        public array|string|null $jodit = null,
    ) {
        Form::allowAttribute($name);
    }

    /**
     * Set the default Jodit options globally.
     *
     * @return void
     */
    public static function defaultJoditOptions(array $options = [])
    {
        static::$defaultJoditOptions = $options;
    }

    /**
     * Returns the JSON representation of the Jodit options.
     */
    public function jsJoditOptions(): string
    {
        return is_string($this->jodit) ? $this->jodit : '{}';
    }

    /**
     * Get the Jodit options.
     */
    public function joditOptions(): array
    {
        $defaults = is_array(static::$defaultJoditOptions) ? static::$defaultJoditOptions : [
            'imageDefaultWidth'    => '100%',
            'showCharsCounter'     => false,
            'showWordsCounter'     => false,
            'showXPathInStatusbar' => false,
            'uploader'             => ['insertImageAsBase64URI' => true],
        ];

        return array_merge($defaults, is_array($this->jodit) ? $this->jodit : []);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.wysiwyg');
    }
}
