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
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\Components\Form\File;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

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
        $this->setRequest($request);

        $this->filesystem = app(Filesystem::class);

        if ($keys) {
            $this->keys($keys);
        }

        $this->clean($request);

        return $next($request);
    }

    /**
     * Sets the request on the class.
     *
     * @param \Illuminate\Http\Request $request
     * @return self
     */
    public function setRequest(Request $request): self
    {
        $this->request = $request;

        return $this;
    }

    /**
     * Setter for the keys that should be cleaned.
     *
     * @param mixed $keys
     * @return self
     */
    public function keys($keys = null): self
    {
        if (is_null($keys)) {
            $this->keys = null;
            return $this;
        }

        $keys = is_array($keys) ? $keys : Form::splitByComma($keys);

        $existingSuffix = File::getSuffixForExistingFiles();
        $orderSuffix    = File::getSuffixForUploadOrder();

        foreach ($this->request->keys() as $key) {
            if ($existingSuffix && Str::endsWith($key, $existingSuffix)) {
                $keys[] = $key;
                $keys[] = $key . ".*";
            }

            if ($orderSuffix && Str::endsWith($key, $orderSuffix)) {
                $keys[] = $key;
            }
        }

        $this->keys = $keys;

        return $this;
    }

    /**
     * Helper method to generate a Middleware string that can be used in the routes file.
     *
     * @param mixed $keys
     * @return string
     */
    public static function for($keys): string
    {
        $keys = is_array($keys) ? implode(',', $keys) : $keys;

        return static::class . ':' . $keys;
    }

    public static function syncMediaLibrary(Request $request, HasMedia $model, string $key, string $collectionName = '', string $diskName = ''): Collection
    {
        $orderKey = $key . File::getSuffixForUploadOrder();

        $isMultipleField = $request->filled($orderKey);

        static::forRequest($request, $isMultipleField ? "{$key}.*" : $key);

        $collectionName = $collectionName ?: 'default';

        return $request->orderedSpladeFileUploads($key)->map(function (SpladeFile $file) use ($model, $collectionName, $diskName) {
            if ($file->exists()) {
                return $file->existing->getModel();
            }

            if ($file->doesntExist()) {
                return $model->addMedia($file->upload)->toMediaCollection($collectionName, $diskName);
            }
        })->filter()->tap(function (Collection $media) use ($model, $collectionName) {
            // Clear unused media.
            $model->clearMediaCollectionExcept($collectionName, $media);

            // Reorder the media.
            $mediaClass = config('media-library.media_model');

            /** @var Media $mediaInstance */
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
        return (new static)
            ->setRequest($request)
            ->keys($keys)
            ->handle($request, fn ($request) => $request);
    }

    /**
     * Helper method to handle a FormRequest. It extracts the keys from the
     * validation rules that have a file rule.
     *
     * @param FormRequest $formRequest
     * @return FormRequest
     */
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

    /**
     * Returns a boolean whether the key should be cleaned.
     *
     * @param string $key
     * @return boolean
     */
    private function shouldHandleKey(string $key): bool
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
     * Transforms encrypted existing file to a SpladeExistingFile instance.
     *
     * @param  mixed  $value
     * @return mixed
     */
    protected function transformExistingValue($value)
    {
        if (!is_string($value)) {
            return $value;
        }

        $existingFile = ExistingFile::fromEncryptedString($value);

        if (!$existingFile) {
            // Not an existing file upload, just a regular string.
            return $value;
        }

        return $existingFile;
    }
    /**
     * Transforms encrypted temporary file to a TemporaryFileUpload instance.
     *
     * @param  mixed  $value
     * @return mixed
     */
    protected function transformTemporaryValue($value)
    {
        if (!is_string($value)) {
            return $value;
        }

        $temporaryFileUpload = TemporaryFileUpload::fromEncryptedString($value);

        if (!$temporaryFileUpload) {
            // Not a temporary file upload, just a regular string.
            return $value;
        }

        return $this->filesystem->makeUploadedFile($temporaryFileUpload);
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
        if (!$this->shouldHandleKey($key)) {
            return $value;
        }

        if ($existingSuffix = File::getSuffixForExistingFiles()) {
            $keyWithoutNumericEnd = $key;

            $keyParts = explode('.', $key);

            if (is_numeric(Arr::last($keyParts))) {
                $keyWithoutNumericEnd = implode('.', array_slice($keyParts, 0, -1));
            }

            if (Str::endsWith($key, $existingSuffix) || Str::endsWith($keyWithoutNumericEnd, $existingSuffix)) {
                return $this->transformExistingValue($value);
            }
        }

        $temporaryFileUpload = $this->transformTemporaryValue($value);

        if (!$temporaryFileUpload instanceof TemporaryFileUpload) {
            // Not a temporary file upload, just a regular string.
            return $value;
        }

        // We need to set the file on the request, otherwise the validation will fail.
        $files = $this->request->files->all();
        Arr::set($files, $key, $temporaryFileUpload);
        $this->request->files->replace($files);

        return $temporaryFileUpload;
    }
}
