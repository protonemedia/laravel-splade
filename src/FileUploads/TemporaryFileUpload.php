<?php

namespace ProtoneMedia\Splade\FileUploads;

class TemporaryFileUpload
{
    public function __construct(
        private string $path,
        private string $name,
        private string $mime,
    ) {
    }

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
        );
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getMime(): string
    {
        return $this->mime;
    }

    public function encryptAttributes(): string
    {
        return encrypt([
            'splade_temporary_file_upload' => true,

            'path' => $this->path,
            'name' => $this->name,
            'mime' => $this->mime,
        ]);
    }
}
