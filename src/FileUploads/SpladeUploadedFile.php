<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Http\UploadedFile as BaseUploadedFile;

class SpladeUploadedFile extends BaseUploadedFile
{
    private TemporaryFileUpload $temporaryFileUpload;

    public function isValid(): bool
    {
        /** @var Filesystem $filesystem */
        $filesystem = app(Filesystem::class);

        return $filesystem->exists($this->temporaryFileUpload);
    }

    public function setTemporaryFileUpload(TemporaryFileUpload $temporaryFileUpload): self
    {
        $this->temporaryFileUpload = $temporaryFileUpload;

        return $this;
    }

    public function __destruct()
    {
        /** @var Filesystem $filesystem */
        $filesystem = app(Filesystem::class);
        $filesystem->delete($this->temporaryFileUpload);
    }
}
