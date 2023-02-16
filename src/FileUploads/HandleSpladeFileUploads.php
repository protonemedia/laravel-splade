<?php

namespace ProtoneMedia\Splade\FileUploads;

use Closure;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
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
     * @return mixed
     */
    public function handle($request, Closure $next, $keys = null)
    {
        $this->filesystem = app(Filesystem::class);

        $this->setRequest($request)
            ->setKeys($keys)
            ->clean($request);

        return $next($request);
    }

    /**
     * Helper method to generate a Middleware string that can be used in the routes file.
     *
     * @param  mixed  $keys
     */
    public static function for($keys): string
    {
        $keys = is_array($keys) ? implode(',', $keys) : $keys;

        return static::class . ':' . $keys;
    }

    /**
     * Helper method to clean the request.
     *
     * @param  mixed  $keys
     */
    public static function forRequest(Request $request, $keys = null): Request
    {
        return (new static)->handle($request, fn ($request) => $request, $keys);
    }

    /**
     * Helper method to handle a FormRequest. It extracts the keys from the
     * validation rules that have a file rule.
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

    public static function syncMediaLibrary(Request $request, HasMedia $subject, string $key, string $collectionName = '', string $diskName = ''): Collection
    {
        $collectionName = $collectionName ?: 'default';

        // When the request has an '_order' key, we assume that it's a 'multiple' file upload.
        $isMultipleField = $request->filled(
            $key . File::getSuffixForUploadOrder()
        );

        // Convert encrypted temporary uploads and existing files to instances.
        static::forRequest($request, $isMultipleField ? "{$key}.*" : $key);

        /** @var Collection $allFiles */
        $allFiles = $request->orderedSpladeFileUploads($key);

        return $allFiles
            ->map(function (SpladeFile $file) use ($subject, $collectionName, $diskName) {
                // Return the existing Media model, or add it to the subject.
                if ($file->exists()) {
                    return $file->existing->getModel();
                }

                if ($file->doesntExist()) {
                    return $subject->addMedia($file->upload)->toMediaCollection($collectionName, $diskName);
                }
            })
            ->filter()
            ->pipeInto(EloquentCollection::class)
            ->tap(function (Collection $media) use ($subject, $collectionName) {
                // Clear unused media.
                $subject->clearMediaCollectionExcept($collectionName, $media);

                // Reorder the media.
                $mediaClass = config('media-library.media_model');

                /** @var Media $mediaInstance */
                $mediaInstance = new $mediaClass();
                $mediaInstance::setNewOrder($media->map->getKey()->all());
            });
    }

    /**
     * Sets the request on the class.
     */
    public function setRequest(Request $request): self
    {
        $this->request = $request;

        return $this;
    }

    /**
     * Setter for the keys that should be cleaned.
     *
     * @param  mixed  $keys
     */
    public function setKeys($keys = null): self
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
                $keys[] = $key . '.*';
            }

            if ($orderSuffix && Str::endsWith($key, $orderSuffix)) {
                $keys[] = $key;
            }
        }

        $this->keys = $keys;

        return $this;
    }

    /**
     * Returns a boolean whether the key should be cleaned.
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

        $uploadedFile = $this->transformTemporaryValue($value);

        if (!$uploadedFile instanceof SpladeUploadedFile) {
            // Not a temporary file upload, just a regular string.
            return $value;
        }

        // We need to set the file on the request, otherwise the validation will fail.
        $files = $this->request->files->all();
        Arr::set($files, $key, $uploadedFile);
        $this->request->files->replace($files);

        return $uploadedFile;
    }
}
