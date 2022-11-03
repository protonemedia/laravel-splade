<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Http\UploadedFile as BaseUploadedFile;

class SpladeUploadedFile extends BaseUploadedFile
{
    private TemporaryFileUpload $temporaryFileUpload;

    /**
     * Returns a boolean indicating if the file is valid.
     *
     * @return bool
     */
    public function isValid(): bool
    {
        /** @var Filesystem $filesystem */
        $filesystem = app(Filesystem::class);

        return $filesystem->exists($this->temporaryFileUpload);
    }

    /**
     * Sets the temporary file upload.
     *
     * @param  \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload  $temporaryFileUpload
     * @return self
     */
    public function setTemporaryFileUpload(TemporaryFileUpload $temporaryFileUpload): self
    {
        $this->temporaryFileUpload = $temporaryFileUpload;

        return $this;
    }
}
