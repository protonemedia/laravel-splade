<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Submit extends Component
{
    /**
     * It's a primary button by default.
     *
     * @var bool
     */
    public bool $primary = true;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $label = 'Submit',
        public string $type = 'submit',
        public bool $spinner = true,
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
        return view('splade::form.submit');
    }

    /**
     * Returns a boolean whether there are background or text classes.
     *
     * @param  \Illuminate\View\ComponentAttributeBag  $attributes
     * @return bool
     */
    public function hasCustomStyling(ComponentAttributeBag $attributes): bool
    {
        $backgroundOrTextClasses = array_filter(explode(' ', $attributes->get('class')), function ($class) {
            return Str::contains($class, ['bg-', 'text-']);
        });

        return !empty($backgroundOrTextClasses);
    }
}
