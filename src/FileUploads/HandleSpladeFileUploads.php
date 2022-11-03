<?php

namespace ProtoneMedia\Splade\FileUploads;

use Closure;
use Illuminate\Foundation\Http\Middleware\TransformsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class HandleSpladeFileUploads extends TransformsRequest
{
    private Request $request;

    private Filesystem $filesystem;

    public function handle($request, Closure $next)
    {
        $this->request = $request;

        $this->filesystem = app(Filesystem::class);

        $this->clean($request);

        return $next($request);
    }

    protected function transform($key, $value)
    {
        if (!is_string($value)) {
            return $value;
        }

        $temporaryFileUpload = TemporaryFileUpload::fromEncryptedString($value);

        if (!$temporaryFileUpload) {
            return null;
        }

        $uploadedFile = $this->filesystem->makeUploadedFile($temporaryFileUpload);

        $files = $this->request->files->all();
        Arr::set($files, $key, $uploadedFile);
        $this->request->files->replace($files);

        return $uploadedFile;
    }
}
