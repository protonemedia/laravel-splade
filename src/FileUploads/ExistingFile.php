<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use JsonSerializable;
use ProtoneMedia\Splade\EloquentSerializer;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ExistingFile implements Arrayable, JsonSerializable
{
    public function __construct(
        public string $filename,
        public array $metadata = [],
        public ?string $name = null,
        public ?string $previewUrl = null,
        public ?string $mimeType = null,
        public ?int $sizeInBytes = null,
    ) {
    }

    public static function fromMediaLibrary(
        $media,
        bool|string $previewConversionName = '',
        $previewUrlExpiration = null,
        array $previewUrlOptions = []
    ): ExistingFile|array {
        $previewUrlExpiration = $previewUrlExpiration ?: now()->addMinutes(5);

        /** @var Media $media */
        if (!$media instanceof Model) {
            return Collection::wrap($media)->map(
                fn (Model $media) => self::fromMediaLibrary(
                    $media,
                    $previewConversionName,
                    $previewUrlExpiration,
                    $previewUrlOptions
                )
            )->all();
        }

        $file = static::withFilename($media->file_name)
            ->name($media->name)
            ->metadata(['model' => app(EloquentSerializer::class)->serialize($media)])
            ->mimeType($media->mime_type)
            ->sizeInBytes($media->size);

        if ($previewConversionName === false) {
            return $file;
        }

        $urlGenerator = $media->getUrlGenerator($previewConversionName);

        /** @var FilesystemAdapter $disk */
        $disk = Storage::disk($previewConversionName ? $media->disk : $media->conversions_disk);

        $previewUrl = $disk->providesTemporaryUrls()
            ? $urlGenerator->getTemporaryUrl($previewUrlExpiration, $previewUrlOptions)
            : $urlGenerator->getUrl();

        return $file->previewUrl($previewUrl);
    }

    public static function fromMediaLibraryWithoutPreview($media)
    {
        return static::fromMediaLibrary($media, false);
    }

    public static function fromDisk(string $disk): ExistingFileFromDisk
    {
        return new ExistingFileFromDisk($disk);
    }

    public static function fromDiskWithoutPreview(string $disk): ExistingFileFromDisk
    {
        return static::fromDisk($disk)->withoutPreview();
    }

    public static function withFilename($filename)
    {
        return new static($filename);
    }

    public function metadata(array $metadata): self
    {
        $this->metadata = $metadata;

        return $this;
    }

    public function name(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function previewUrl(string $previewUrl): self
    {
        $this->previewUrl = $previewUrl;

        return $this;
    }

    public function mimeType(string $mimeType): self
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    public function sizeInBytes(int $sizeInBytes): self
    {
        $this->sizeInBytes = $sizeInBytes;

        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    public function toArray(): array
    {
        $file = [
            'name' => $this->filename,
            'size' => $this->sizeInBytes,
            'type' => $this->mimeType,
        ];

        return [
            'source' => $this->previewUrl ? [
                'preview_url' => $this->previewUrl,
                ...$file,
            ] : null,
            'options' => [
                'type' => 'local',

                'metadata' => [
                    'metadata' => encrypt(json_encode($this->metadata)),
                ],

                'file' => $this->previewUrl ? null : $file,
            ],
        ];
    }
}
