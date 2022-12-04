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

    public function exists(): bool
    {
        return $this->file instanceof ExistingFile;
    }

    public function doesntExist(): bool
    {
        return !$this->exists();
    }

    public function new(): bool
    {
        return $this->file instanceof UploadedFile;
    }
}
