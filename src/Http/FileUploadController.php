<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use ProtoneMedia\Splade\FileUploads\Filesystem;
use ProtoneMedia\Splade\FileUploads\TemporaryFileUpload;

class FileUploadController extends Controller
{
    /**
     * Store the uploaded file and return the encrypted path.
     */
    public function store(Request $request, Filesystem $filesystem): Response
    {
        $request->validate([
            'file' => ['required', 'file'],
        ]);

        $temporaryFileUpload = $filesystem->storeUploadedFileTemporarely($request->file('file'));

        return response($temporaryFileUpload->encryptAttributes())->skipSpladeMiddleware();
    }

    /**
     * Decrypt the requested path and delete the file.
     */
    public function delete(Request $request, Filesystem $filesystem): Response
    {
        $request->validate([
            'file' => ['required', 'string'],
        ]);

        $temporaryFileUpload = TemporaryFileUpload::fromEncryptedString($request->input('file'));

        if ($temporaryFileUpload) {
            $filesystem->delete($temporaryFileUpload);
        }

        return response()->noContent()->skipSpladeMiddleware();
    }
}
