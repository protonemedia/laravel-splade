<?php

namespace ProtoneMedia\Splade\FileUploads;

use Exception;
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

    public function withPreview($value = true): self
    {
        $this->withPreview = $value;

        return $this;
    }

    public function withoutPreview(): self
    {
        return $this->withPreview(false);
    }

    public function previewUrl($path, $expiration = null, array $options = []): string
    {
        $expiration = $expiration ?: now()->addMinutes(5);

        return $this->disk->providesTemporaryUrls()
            ? $this->disk->temporaryUrl($path, $expiration, $options)
            : $this->disk->url($path);
    }

    public function get($path, $previewUrlExpiration = null, array $previewUrlOptions = []): ExistingFile|array
    {
        if (!is_string($path)) {
            return Collection::wrap($path)->map(fn ($path) => $this->get($path, $previewUrlExpiration, $previewUrlOptions))->all();
        }

        if (!$this->disk->fileExists($path)) {
            throw new Exception("The file '{$path}' does not exist on disk '{$this->diskName}'.");
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
