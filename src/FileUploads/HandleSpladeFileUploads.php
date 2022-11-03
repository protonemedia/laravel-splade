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

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->request = $request;

        $this->filesystem = app(Filesystem::class);

        $this->clean($request);

        return $next($request);
    }

    /**
     * Helper method to clean the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Request
     */
    public static function transformRequest(Request $request): Request
    {
        return (new static)->handle($request, fn ($request) => $request);
    }

    /**
     * Transforms encrypted temporary file uploads to SpladeUploadedFile instances.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return mixed
     */
    protected function transform($key, $value)
    {
        if (!is_string($value)) {
            return $value;
        }

        $temporaryFileUpload = TemporaryFileUpload::fromEncryptedString($value);

        if (!$temporaryFileUpload) {
            // Not a temporary file upload, just a regular string.
            return $value;
        }

        $uploadedFile = $this->filesystem->makeUploadedFile($temporaryFileUpload);

        if (!$uploadedFile) {
            // The file doesn't exist anymore, return null.
            return null;
        }

        // We need to set the file on the request, otherwise the validation will fail.
        $files = $this->request->files->all();
        Arr::set($files, $key, $uploadedFile);
        $this->request->files->replace($files);

        return $uploadedFile;
    }
}
