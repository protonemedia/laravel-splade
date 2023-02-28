<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Http\UploadedFile;

class SpladeFile
{
    public UploadedFile $upload;

    public ExistingFile $existing;

    public function __construct(public ExistingFile|UploadedFile $file)
    {
        $this->file = $file;

        if ($file instanceof UploadedFile) {
            $this->upload = $file;
        }

        if ($file instanceof ExistingFile) {
            $this->existing = $file;
        }
    }

    /**
     * Returns a boolean whether the file exists.
     */
    public function exists(): bool
    {
        return $this->file instanceof ExistingFile;
    }

    /**
     * Returns a boolean whether the file is uploaded.
     */
    public function doesntExist(): bool
    {
        return !$this->exists();
    }

    /**
     * Returns true if the file is uploaded.
     */
    public function new(): bool
    {
        return $this->file instanceof UploadedFile;
    }
}
