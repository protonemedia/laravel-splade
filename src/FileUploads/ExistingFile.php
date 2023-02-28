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
use Stringable;

class ExistingFile implements Arrayable, JsonSerializable, Stringable
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

        /** @var EloquentSerializer $serializer */
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

    /**
     * Helper method to create an instance based on a Spatie Media Library model or collection.
     *
     * @param  mixed  $media
     * @param  string  $previewConversionName
     * @param  mixed  $previewUrlExpiration
     */
    public static function fromMediaLibrary(
        $media,
        bool|string $previewConversionName = '',
        $previewUrlExpiration = null,
        array $previewUrlOptions = []
    ): ExistingFile|array|null {
        if (is_null($media)) {
            return null;
        }

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
            )->filter()->all();
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

    /**
     * Same as `fromMediaLibrary`, but withou the preview URL.
     *
     * @param  mixed  $media
     * @return void
     */
    public static function fromMediaLibraryWithoutPreview($media)
    {
        return static::fromMediaLibrary($media, false);
    }

    /**
     * Returns an instance of ExistingFileFromDisk to load the file from a disk.
     *
     * @return \ProtoneMedia\Splade\FileUploads\ExistingFileFromDisk
     */
    public static function fromDisk(string $disk): ExistingFileFromDisk
    {
        return new ExistingFileFromDisk($disk);
    }

    /**
     * Returns an instance of ExistingFileFromDisk to load the file from a disk,
     * but without a preview.
     *
     * @return \ProtoneMedia\Splade\FileUploads\ExistingFileFromDisk
     */
    public static function fromDiskWithoutPreview(string $disk): ExistingFileFromDisk
    {
        return static::fromDisk($disk)->withoutPreview();
    }

    /**
     * Helper method to create a new instance with the filename.
     */
    public static function withFilename(string $filename): static
    {
        return new static($filename);
    }

    /**
     * Setter for the metadata.
     */
    public function metadata(array $metadata): self
    {
        $this->metadata = $metadata;

        return $this;
    }

    /**
     * Setter for the name.
     */
    public function name(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Setter for the previewUrl.
     */
    public function previewUrl(string $previewUrl): self
    {
        $this->previewUrl = $previewUrl;

        return $this;
    }

    /**
     * Setter for the MIME Type.
     */
    public function mimeType(string $mimeType): self
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    /**
     * Setter for the size in bytes.
     */
    public function sizeInBytes(int $sizeInBytes): self
    {
        $this->sizeInBytes = $sizeInBytes;

        return $this;
    }

    /**
     * Returns the same as the 'toArray()' metod.
     *
     * @return array
     */
    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    /**
     * Returns the data as an array.
     */
    public function toArray(): array
    {
        $file = [
            'name' => $this->filename,
            'size' => $this->sizeInBytes,
            'type' => $this->mimeType,
        ];

        return [
            'source' => $this->previewUrl ? array_merge($file, [
                'preview_url' => $this->previewUrl,
            ]) : null,
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

    /**
     * Getter for the identifier.
     */
    public function getIdentifier(): string
    {
        return $this->identifier;
    }

    /**
     * Getter for the metadata.
     *
     * @return string
     */
    public function getMetadata(string $key = null)
    {
        return $key ? Arr::get($this->metadata, $key) : $this->metadata;
    }

    /**
     * Helper method to get the 'model' key from the metadata.
     *
     * @return mixed
     */
    public function getModel()
    {
        return $this->getMetadata('model');
    }

    /**
     * Returns the attributes as an encrypted string.
     */
    public function encryptAttributes(): string
    {
        /** @var EloquentSerializer $serializer */
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

    /**
     * Returns the same as the 'encryptAttributes()' method.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->encryptAttributes();
    }
}
