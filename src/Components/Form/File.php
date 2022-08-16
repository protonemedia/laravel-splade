<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;

class File extends Component
{
    use InteractsWithFormElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string $name = '',
        public string $label = '',
        public bool $showErrors = true,
        public bool $multiple = false,
        public string $scope = 'file'
    ) {
        if ($multiple) {
            $this->validationName = $this->dottedName($name);
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form.file');
    }
}
