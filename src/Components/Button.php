<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Button extends Component
{
    /**
     * It's a primary button by default.
     */
    public bool $primary = true;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public HtmlString|string $label = 'Submit',
        public string $type = 'submit',
        public string $name = '',
        public $value = null,
        public $danger = false,
        public $secondary = false,
    ) {
        $this->primary = !$this->danger && !$this->secondary;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::components.button');
    }

    /**
     * Returns a boolean whether there are background or text classes.
     */
    public static function hasCustomStyling(ComponentAttributeBag $attributes): bool
    {
        $backgroundOrTextClasses = array_filter(explode(' ', $attributes->get(key: 'class', default: '')), function ($class) {
            return Str::contains($class, ['bg-', 'text-']);
        });

        return !empty($backgroundOrTextClasses);
    }
}
