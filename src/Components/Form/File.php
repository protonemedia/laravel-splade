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
        public bool|string $placeholder = true,
        public string $validationKey = '',
        public bool $showErrors = true,
        public bool $multiple = false,
        public string $scope = 'file',
        public string $help = '',
        public bool|array|string|null $filepond = null,
        public bool|string $server = false,
        public bool $preview = false,
        public array|string $accept = '',
        public bool|int|string $minSize = false,
        public bool|int|string $maxSize = false,
        public bool|int $width = false,
        public bool|int $height = false,
        public bool|int $minWidth = false,
        public bool|int $maxWidth = false,
        public bool|int $minHeight = false,
        public bool|int $maxHeight = false,
        public bool|int $minResolution = false,
        public bool|int $maxResolution = false,
    ) {
        if ($placeholder === true) {
            $this->placeholder = $filepond
                ? __('Drag and drop your files or Browse') . '...'
                : __('Browse') . '...';
        }

        Form::allowAttribute($name);

        if ($multiple) {
            $this->validationKey = static::dottedName($name);
        }

        if ($server === true) {
            $this->server = route('splade.fileUpload.store');
        }

        if ($width) {
            $this->minWidth = $width;
            $this->maxWidth = $width;
        }

        if ($height) {
            $this->minHeight = $height;
            $this->maxHeight = $height;
        }

        $this->accept = is_string($accept) ? Form::splitByComma($accept) : $accept;
    }

    /**
     * Returns the JSON representation of the Filepond options.
     *
     * @return string
     */
    public function jsFilepondOptions(): string
    {
        return is_string($this->filepond) ? $this->filepond : '{}';
    }

    /**
     * Returns an array with Filepond options. If Filepond won't
     * be used, it returns a negative boolean.
     *
     * @return bool|array
     */
    public function filepondOptions(): bool|array
    {
        if ($this->filepond === false) {
            return false;
        }

        return array_merge(
            [
                'labelIdle' => $this->placeholder,
                'multiple'  => $this->multiple,
                'name'      => 'file',
            ],
            is_array($this->filepond) ? $this->filepond : [],
        );
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
