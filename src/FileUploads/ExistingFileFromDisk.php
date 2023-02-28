<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

class ExistingFileFromDisk
{
    private FilesystemAdapter $disk;

    private bool $withPreview = true;

    public function __construct(
        public string $diskName,
    ) {
        $this->disk = Storage::disk($diskName);
    }

    /**
     * Enables the preview URL generation.
     *
     * @param  bool  $value
     */
    public function withPreview($value = true): self
    {
        $this->withPreview = $value;

        return $this;
    }

    /**
     * Disables the preview URL generation.
     */
    public function withoutPreview(): self
    {
        return $this->withPreview(false);
    }

    /**
     * Generates a preview URL.
     *
     * @param  mixed  $expiration
     */
    public function previewUrl(string $path, $expiration = null, array $options = []): string
    {
        $expiration = $expiration ?: now()->addMinutes(5);

        return $this->disk->providesTemporaryUrls()
            ? $this->disk->temporaryUrl($path, $expiration, $options)
            : $this->disk->url($path);
    }

    /**
     * Returns an ExistingFile instance for the given path.
     *
     * @param  mixed  $path
     * @param  mixed  $previewUrlExpiration
     */
    public function get($path, $previewUrlExpiration = null, array $previewUrlOptions = []): ExistingFile|array
    {
        if (!is_string($path)) {
            return Collection::wrap($path)->map(fn ($path) => $this->get($path, $previewUrlExpiration, $previewUrlOptions))->all();
        }

        if (!$this->disk->fileExists($path)) {
            throw new FileNotFoundException("File does not exist at path {$path} on disk {$this->diskName}.");
        }

        $file = ExistingFile::withFilename($path)
            ->name(pathinfo($path, PATHINFO_BASENAME))
            ->metadata(['disk' => $this->diskName, 'path' => $path])
            ->mimeType($this->disk->mimeType($path))
            ->sizeInBytes($this->disk->size($path));

        if ($this->withPreview) {
            $file->previewUrl(
                $this->previewUrl($path, $previewUrlExpiration, $previewUrlOptions)
            );
        }

        return $file;
    }
}
