<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Support\Str;

class TemporaryFileUpload
{
    const PATH_PREFIX = 'splade-upload-';

    public function __construct(
        private string $path,
        private string $name,
        private string $mime,
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

        if (!array_key_exists('splade_temporary_file_upload', $data)) {
            return null;
        }

        return new static(
            $data['path'],
            $data['name'],
            $data['mime'],
            $data['identifier'],
        );
    }

    /**
     * Returns the path to the file.
     *
     * @return string
     */
    public function getPath(): string
    {
        return $this->path;
    }

    /**
     * Returns the name of the file.
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Returns the mime type of the file.
     *
     * @return string
     */
    public function getMime(): string
    {
        return $this->mime;
    }

    /**
     * Returns the attributes as an encrypted string.
     *
     * @return string
     */
    public function encryptAttributes(): string
    {
        return encrypt([
            'splade_temporary_file_upload' => true,

            'path'                         => $this->path,
            'name'                         => $this->name,
            'mime'                         => $this->mime,
            'identifier'                   => $this->identifier,
        ]);
    }
}
