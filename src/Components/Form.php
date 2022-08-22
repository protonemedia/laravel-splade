<?php

namespace ProtoneMedia\Splade\Components;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Fluent;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class Form extends Component
{
    use ParsesJsonDataAttribute;

    private $data;

    private $json;

    public bool $guarded;

    private $model;

    private static $defaultGuardAttributes = true;

    public static $allowedAttributes = [];

    public static $eloquentRelations = [];

    private static $guardWhenCallable = null;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($default = null, public string $scope = 'form', $unguarded = null)
    {
        static::$allowedAttributes = [];
        static::$eloquentRelations = [];

        $this->parseResource($default);

        if ($unguarded === null) {
            $this->guarded = static::$defaultGuardAttributes;
        } else {
            $this->guarded = !$unguarded;
        }

        if ($this->guarded && !static::resourceShouldBeGuarded($default)) {
            $this->guarded = false;
        }
    }

    public static function defaultUnguarded(bool $state = true)
    {
        static::$defaultGuardAttributes = !$state;
    }

    public static function guardWhen(Closure $callback)
    {
        static::$guardWhenCallable = $callback;
    }

    private static function resourceShouldBeGuarded($resource): bool
    {
        $callback = static::$guardWhenCallable ?: function ($resource) {
            return $resource instanceof Fluent || $resource instanceof Model;
        };

        return $callback($resource);
    }

    private function parseResource($default = null)
    {
        if ($default instanceof Model) {
            $this->model = $default;
        }

        $parsed = $this->parseJsonData($default);

        if ($parsed) {
            return $this->data = $parsed;
        }

        if ($default) {
            return $this->json = $default;
        }

        return $this->data = [];
    }

    private static function allowedAttributesSorted(): array
    {
        return Collection::make(static::$allowedAttributes)
            ->filter()
            ->keys()
            ->sortBy(function ($key) {
                return Str::substrCount($key, '.');
            })
            ->values()
            ->all();
    }

    private function guardedData(): ?object
    {
        if (!$this->guarded) {
            return null;
        }

        $rawData = $this->model
            ? $this->model->attributesToArray()
            : $this->data;

        if ($rawData === null) {
            return null;
        }

        $guardedData = [];

        foreach (static::allowedAttributesSorted() as $attribute) {
            data_set($guardedData, $attribute, data_get($rawData, $attribute));
        }

        if ($this->model) {
            foreach (static::$eloquentRelations as $relation => $isEnabled) {
                if (!$isEnabled) {
                    continue;
                }

                $key = $this->model::$snakeAttributes ? Str::snake($relation) : $relation;

                data_set($guardedData, $key, $this->getAttachedKeysFromRelation($relation));
            }
        }

        return (object) $guardedData;
    }

    private function dataWithAllAttributes(): ?object
    {
        if ($this->data === null) {
            return null;
        }

        $data = $this->data;

        foreach (static::allowedAttributesSorted() as $attribute) {
            if (Arr::has($data, $attribute)) {
                continue;
            }

            data_set($data, $attribute, null);
        }

        return (object) $data;
    }

    public function formData(): array
    {
        $data = [
            'data' => null,
            'json' => $this->json,
        ];

        if ($guardedData = $this->guardedData()) {
            $data['data'] = $guardedData;
        } elseif ($dataWithAllAttributes = $this->dataWithAllAttributes()) {
            $data['data'] = $dataWithAllAttributes;
        }

        static::$allowedAttributes = [];
        static::$eloquentRelations = [];

        return $data;
    }

    private function getAttachedKeysFromRelation(string $relationName): ?array
    {
        $relation = $this->model->{$relationName}();

        if ($relation instanceof BelongsToMany) {
            $relatedKeyName = $relation->getRelatedKeyName();

            return $relation->getBaseQuery()
                ->get($relation->getRelated()->qualifyColumn($relatedKeyName))
                ->pluck($relatedKeyName)
                ->all();
        }

        if ($relation instanceof MorphMany) {
            $parentKeyName = $relation->getLocalKeyName();

            return $relation->getBaseQuery()
                ->get($relation->getQuery()->qualifyColumn($parentKeyName))
                ->pluck($parentKeyName)
                ->all();
        }

        return [];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form');
    }
}
