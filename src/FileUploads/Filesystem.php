<?php

namespace ProtoneMedia\Splade\FileUploads;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
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
     * @param  \Illuminate\Http\UploadedFile  $file
     * @return \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload
     */
    public function storeUploadedFileTemporarely(UploadedFile $file): TemporaryFileUpload
    {
        $path = $file->store(
            path: 'splade-upload-' . Str::uuid(),
            options: ['disk' => $this->disk]
        );

        return new TemporaryFileUpload(
            path: $path,
            name: $file->getClientOriginalName(),
            mime: $file->getMimeType()
        );
    }

    /**
     * Deletes old temporary file uploads.
     *
     * @return void
     */
    public function deleteTemporaryFiles()
    {
        $lifetime = time() - config('splade.file_uploads.temporary_file_lifetime');

        Collection::make($this->filesystem->directories())->each(function (string $directory) use ($lifetime) {
            if (!Str::startsWith($directory, 'splade-upload-')) {
                return;
            }

            $lastModified = $this->filesystem->lastModified($directory);

            if ($lastModified > $lifetime) {
                return;
            }

            $this->filesystem->deleteDirectory($directory);
        });
    }

    /**
     * Returns a boolean whether the file exists.
     *
     * @param \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload $temporaryFileUpload
     * @return boolean
     */
    public function exists(TemporaryFileUpload $temporaryFileUpload): bool
    {
        return $this->filesystem->exists($temporaryFileUpload->getPath());
    }

    /**
     * Returns an instance of SpladeUploadedFile when the temporary file exists.
     *
     * @param \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload $temporaryFileUpload
     * @return \ProtoneMedia\Splade\FileUploads\SpladeUploadedFile|null
     */
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

    /**
     * Deletes the temporary file.
     *
     * @param \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload $temporaryFileUpload
     * @return bool
     */
    public function delete(TemporaryFileUpload $temporaryFileUpload): bool
    {
        return $this->filesystem->delete($temporaryFileUpload->getPath());
    }
}
