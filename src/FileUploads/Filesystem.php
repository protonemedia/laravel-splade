<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Filesystem
{
    private FilesystemAdapter $filesystem;

    public function __construct(private string $disk)
    {
        $this->filesystem = Storage::disk($disk);
    }

    /**
     * Stores the uploaded file as a temporary file.
     *
     * @param \Illuminate\Http\UploadedFile $file
     * @return \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload
     */
    public function storeUploadedFileTemporarely(UploadedFile $file): TemporaryFileUpload
    {
        $path = $file->store(
            path: "splade-upload-" . Str::uuid(),
            options: ['disk' => $this->disk]
        );

        return new TemporaryFileUpload(
            path: $path,
            name: $file->getClientOriginalName(),
            mime: $file->getMimeType()
        );
    }

    public function exists(TemporaryFileUpload $temporaryFileUpload): bool
    {
        return $this->filesystem->exists($temporaryFileUpload->getPath());
    }

    public function makeUploadedFile(TemporaryFileUpload $temporaryFileUpload): ?SpladeUploadedFile
    {
        if (!$this->exists($temporaryFileUpload)) {
            return null;
        }

        $uploadedFile = new SpladeUploadedFile(
            path: $this->filesystem->path($temporaryFileUpload->getPath()),
            originalName: $temporaryFileUpload->getName(),
            mimeType: $temporaryFileUpload->getMime()
        );

        return $uploadedFile->setTemporaryFileUpload($temporaryFileUpload);
    }

    public function delete(TemporaryFileUpload $temporaryFileUpload)
    {
        $this->filesystem->delete($temporaryFileUpload->getPath());
    }
}
