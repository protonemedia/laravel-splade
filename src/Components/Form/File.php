<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\Form;

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
        public string $vModel = '',
        public string $label = '',
        public string $validationKey = '',
        public bool $showErrors = true,
        public bool $multiple = false,
        public string $scope = 'file',
        public string $help = '',
        public bool|array|string|null $filepond = null,
        public bool|string $server = false,
    ) {
        Form::allowAttribute($name);

        if ($multiple) {
            $this->validationKey = static::dottedName($name);
        }

        if ($server === true) {
            $this->server = route('splade.fileUpload.store');
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
