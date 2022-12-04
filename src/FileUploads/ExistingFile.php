<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        private ?string $identifier = null,
    ) {
        $this->identifier = $identifier ?: Str::random();
    }

    /**
     * Decrypts the string and returns a new instance, or null if the string is invalid.
     *
     * @param  string  $value
     * @return static|null
     */
    public static function fromEncryptedString(string $value): ?static
    {
        $data = rescue(fn () => decrypt($value), null, false);

        if (!is_array($data)) {
            return null;
        }

        if (!array_key_exists('splade_existing_file_upload', $data)) {
            return null;
        }

        $serializer = app(EloquentSerializer::class);

        $metadata = Collection::make($data['metadata'])
            ->map(fn ($value) => $serializer->restore($value))
            ->all();

        return new static(
            $data['filename'],
            $metadata,
            $data['name'],
            $data['preview_url'],
            $data['mime_type'],
            $data['size_in_bytes'],
            $data['identifier'],
        );
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
            ->metadata(['model' => $media])
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
                    'identifier' => $this->identifier,
                    'metadata'   => $this->encryptAttributes(),
                ],

                'file' => $this->previewUrl ? null : $file,
            ],
        ];
    }

    public function getIdentifier(): string
    {
        return $this->identifier;
    }

    public function getMetadata(string $key = null)
    {
        return $key ? Arr::get($this->metadata, $key) : $this->metadata;
    }

    public function getModel()
    {
        return $this->getMetadata('model');
    }

    /**
     * Returns the attributes as an encrypted string.
     *
     * @return string
     */
    public function encryptAttributes(): string
    {
        $serializer = app(EloquentSerializer::class);

        $metadata = Collection::make($this->metadata)
            ->map(fn ($value) => $serializer->serialize($value))
            ->all();

        return encrypt([
            'splade_existing_file_upload' => true,

            'filename'      => $this->filename,
            'metadata'      => $metadata,
            'name'          => $this->name,
            'preview_url'   => $this->previewUrl,
            'mime_type'     => $this->mimeType,
            'size_in_bytes' => $this->sizeInBytes,
            'identifier'    => $this->identifier,
        ]);
    }
}
