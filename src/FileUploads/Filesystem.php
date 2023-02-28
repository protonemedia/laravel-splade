<?php

namespace ProtoneMedia\Splade\FileUploads;

use Exception;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Flysystem\Local\LocalFilesystemAdapter;

class Filesystem
{
    private FilesystemAdapter $filesystem;

    public function __construct(private string $disk)
    {
        $this->filesystem = Storage::disk($disk);

        if (!$this->filesystem->getAdapter() instanceof LocalFilesystemAdapter) {
            throw new Exception('The Splade File Upload disk must be a local disk.');
        }
    }

    /**
     * Stores the uploaded file as a temporary file.
     *
     * @return \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload
     */
    public function storeUploadedFileTemporarely(UploadedFile $file): TemporaryFileUpload
    {
        $path = $file->store(
            path: TemporaryFileUpload::PATH_PREFIX . Str::uuid(),
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
            if (!Str::startsWith($directory, TemporaryFileUpload::PATH_PREFIX)) {
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
     * @param  \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload  $temporaryFileUpload
     */
    public function exists(TemporaryFileUpload $temporaryFileUpload): bool
    {
        return $this->filesystem->exists($temporaryFileUpload->getPath());
    }

    /**
     * Returns an instance of SpladeUploadedFile when the temporary file exists.
     *
     * @param  \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload  $temporaryFileUpload
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
     * @param  \ProtoneMedia\Splade\FileUploads\TemporaryFileUpload  $temporaryFileUpload
     */
    public function delete(TemporaryFileUpload $temporaryFileUpload): bool
    {
        return $this->filesystem->delete($temporaryFileUpload->getPath());
    }
}
