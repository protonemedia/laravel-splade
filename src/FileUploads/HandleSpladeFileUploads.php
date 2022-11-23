<?php

namespace ProtoneMedia\Splade\FileUploads;

use Closure;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Foundation\Http\Middleware\TransformsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\File;

class HandleSpladeFileUploads extends TransformsRequest
{
    private Request $request;

    private Filesystem $filesystem;

    private ?array $keys = null;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $keys = null)
    {
        $this->request = $request;

        $this->filesystem = app(Filesystem::class);

        if ($keys) {
            $this->keys($keys);
        }

        $this->clean($request);

        return $next($request);
    }

    public function keys($keys = null): self
    {
        if (is_null($keys)) {
            return $this;
        }

        $this->keys = is_array($keys)
            ? $keys
            : array_filter(array_map('trim', explode(',', $keys)));

        return $this;
    }

    public static function for($keys): string
    {
        $keys = is_array($keys) ? implode(',', $keys) : $keys;

        return static::class . ':' . $keys;
    }

    /**
     * Helper method to clean the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $keys
     * @return \Illuminate\Http\Request
     */
    public static function forRequest(Request $request, $keys = null): Request
    {
        return (new static)->keys($keys)->handle($request, fn ($request) => $request);
    }

    public static function forFormRequest(FormRequest $formRequest): FormRequest
    {
        $rules = Validator::make([], $formRequest->rules())->getRules();

        $keys = Collection::make($rules)->filter(function ($rules) {
            if (in_array('file', $rules)) {
                return true;
            }

            if (!class_exists(File::class)) {
                return false;
            }

            foreach ($rules as $rule) {
                if ($rule instanceof File) {
                    return true;
                }
            }

            return false;
        })->keys()->values();

        return static::forRequest($formRequest, $keys->isEmpty() ? null : $keys->all());
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
        if (is_array($this->keys)) {
            if (Arr::first($this->keys, fn ($allowedKey) => Str::is($allowedKey, $key)) === null) {
                return $value;
            }
        }

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
