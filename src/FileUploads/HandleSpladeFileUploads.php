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
use ProtoneMedia\Splade\Components\Form\File;
use Spatie\MediaLibrary\HasMedia;

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

    public static function syncMediaLibrary(Request $request, HasMedia $model, string $key, string $collectionName = '', string $diskName = ''): Collection
    {
        static::forRequest($request, [$key, "{$key}.*"]);

        $collectionName = $collectionName ?: 'default';

        return $request->orderedSpladeFileUploads($key)->map(function (SpladeFile $file) use ($model, $collectionName, $diskName) {
            if ($file->exists()) {
                return $file->existing->getModel();
            }

            if ($file->doesntExist()) {
                return $model->addMedia($file->upload)->toMediaCollection($collectionName, $diskName);
            }
        })->filter()->tap(function (Collection $media) use ($model, $collectionName) {
            $model->clearMediaCollectionExcept($collectionName, $media);

            $mediaClass = config('media-library.media_model');

            $mediaInstance = new $mediaClass();

            $mediaInstance::setNewOrder($media->map->getKey()->all());
        });
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

        $formRequest->clearConvertedFiles();

        $keys = Collection::make($rules)->filter(function ($rules) {
            if (in_array('file', $rules)) {
                return true;
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

    private function shouldHandleKey($key)
    {
        if (!is_array($this->keys)) {
            return true;
        }

        if (Arr::first($this->keys, fn ($allowedKey) => Str::is($allowedKey, $key)) === null) {
            return false;
        }

        return true;
    }

    /**
     * Transforms encrypted existing upload to SpladeExistingFile instances.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return mixed
     */
    protected function transformExistingUpload($key, $value)
    {
        if (!is_string($value)) {
            return $value;
        }

        $temporaryFileUpload = ExistingFile::fromEncryptedString($value);

        if (!$temporaryFileUpload) {
            // Not an existing file upload, just a regular string.
            return $value;
        }

        return $temporaryFileUpload;
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
        $realKey = $key;

        $suffix = File::getSuffixForExistingFiles();

        $keyParts = explode('.', $key);

        if (is_numeric($keyParts[count($keyParts) - 1])) {
            $realKey = implode('.', array_slice($keyParts, 0, -1));
        }

        if ($suffix && Str::endsWith($realKey, $suffix)) {
            $keyWithoutSuffix = Str::beforeLast($realKey, $suffix);

            if (!$this->shouldHandleKey($keyWithoutSuffix)) {
                return $value;
            }

            return $this->transformExistingUpload($key, $value);
        }

        if (!$this->shouldHandleKey($key)) {
            return $value;
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
