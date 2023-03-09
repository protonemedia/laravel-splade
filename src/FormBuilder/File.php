<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\File as SpladeFile;

class File extends Component
{
    protected bool|string $placeholder = true;

    protected bool $multiple = false;

    protected array|bool $filepond = false;

    protected bool|string $server = false;

    protected bool $preview = false;

    protected array|string $accept = '';

    protected bool|int|string $minSize = false;

    protected bool|int|string $maxSize = false;

    protected bool|int $width = false;

    protected bool|int $height = false;

    protected bool|int $minWidth = false;

    protected bool|int $maxWidth = false;

    protected bool|int $minHeight = false;

    protected bool|int $maxHeight = false;

    protected bool|int $minResolution = false;

    protected bool|int $maxResolution = false;

    /**
     * Add a placeholder to the field
     *
     * @param  bool  $required
     * @return $this
     */
    public function placeholder(string $placeholder = ''): self
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    /**
     * Allow uploading multiple files
     *
     * @return $this
     */
    public function multiple(bool $multiple = true): self
    {
        $this->multiple = $multiple;

        return $this;
    }

    /**
     * Enable Filepond, sets Filepond-options if an array is provided
     *
     * @return $this
     */
    public function filepond(array|bool $filepond = true): self
    {
        $this->filepond = $filepond;

        return $this;
    }

    /**
     * Enables asynchronous uploads of files
     *
     * Only available together with ->filepond()
     *
     * `Route::spladeUploads();` is required in /routes/web.php is set to `true`.
     * Provide a string to set your own route.
     *
     * @return $this
     */
    public function server(bool|string $server = true): self
    {
        $this->server = $server;

        return $this;
    }

    /**
     * Enables showing a preview of uploaded images
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function preview(bool $preview = true): self
    {
        $this->preview = $preview;

        return $this;
    }

    /**
     * Set the accepted mimetype(s), automatically adds validation rules
     *
     * @return $this
     */
    public function accept(array|string $mimetypes = ''): self
    {
        $this->accept = $mimetypes;

        $this->rules[] = 'mimetypes:' . (is_array($mimetypes) ? implode(',', $mimetypes) : $mimetypes);

        return $this;
    }

    /**
     * Sets the min-size to validate the file size
     *
     * @return $this
     */
    public function minSize(bool|int|string $minSize = ''): self
    {
        $this->minSize                = $minSize;
        $this->attributes['min-size'] = $minSize;

        return $this;
    }

    /**
     * Sets the max-size to validate the file size
     *
     * @return $this
     */
    public function maxSize(bool|int|string $maxSize = ''): self
    {
        $this->maxSize                = $maxSize;
        $this->attributes['max-size'] = $maxSize;

        return $this;
    }

    /**
     * Sets ->minWidth() and ->maxWidth() to the same value
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function width(int $width): self
    {
        $this->width = $width;

        return $this;
    }

    /**
     * Sets ->minHeight() and ->maxHeight() to the same value
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function height(int $height): self
    {
        $this->height = $height;

        return $this;
    }

    /**
     * Set the min-width
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function minWidth(int $minWidth): self
    {
        $this->minWidth = $minWidth;

        return $this;
    }

    /**
     * Set the max-width
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function maxWidth(int $maxWidth): self
    {
        $this->maxWidth = $maxWidth;

        return $this;
    }

    /**
     * Set the min-height
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function minHeight(int $minHeight): self
    {
        $this->minHeight = $minHeight;

        return $this;
    }

    /**
     * Set the max-height
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function maxHeight(int $maxHeight): self
    {
        $this->maxHeight = $maxHeight;

        return $this;
    }

    /**
     * Set the min-resolution
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function minResolution(int $minResolution): self
    {
        $this->minResolution = $minResolution;

        return $this;
    }

    /**
     * Set the max-resolution
     *
     * Only available together with ->filepond()
     *
     * @return $this
     */
    public function maxResolution(int $maxResolution): self
    {
        $this->maxResolution = $maxResolution;

        return $this;
    }

    /**
     * Renders the SpladeFile
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeFile(
            name:  $this->name,
            label: $this->label,
            placeholder: $this->placeholder,
            multiple: $this->multiple,
            help: $this->help,
            filepond: $this->filepond,
            server: $this->server,
            preview: $this->preview,
            accept: $this->accept,
            minSize: $this->minSize,
            maxSize: $this->maxSize,
            width: $this->width,
            height: $this->height,
            minWidth: $this->minWidth,
            maxWidth: $this->maxWidth,
            minHeight: $this->minHeight,
            maxHeight: $this->maxHeight,
            minResolution: $this->minResolution,
            maxResolution: $this->maxResolution
        );
    }
}
