<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\Components\SpladeComponent;

class Radios extends Component
{
    use InteractsWithFormElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public $options = [],
        public HtmlString|string $label = '',
        public bool $inline = false,
        public HtmlString|string $help = ''
    ) {
        Form::allowAttribute($name);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.radios', [
            'groupComponent' => SpladeComponent::normalize('group'),
            'radioComponent' => SpladeComponent::normalize('radio'),
        ]);
    }
}
