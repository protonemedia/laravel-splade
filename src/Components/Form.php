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
use ProtoneMedia\Splade\Components\Form\InteractsWithFormElement;
use ProtoneMedia\Splade\SpladeCore;

class Form extends Component
{
    use ParsesJsonDataAttribute;
    use InteractsWithFormElement;

    public $spladeId;

    public bool $guarded;

    private $data;

    private $json;

    private $model;

    private static $defaultGuardAttributes = true;

    private static $allowedAttributes = [];

    private static $eloquentRelations = [];

    private static $guardWhenCallable = null;

    private static $instances = [];

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($default = null, public string $scope = 'form', $unguarded = null)
    {
        static::$instances[] = $this;

        $this->spladeId = Str::random();

        static::$allowedAttributes = [];
        static::$eloquentRelations = [];

        $this->parseResource($default);

        if ($unguarded === null) {
            $this->guarded = static::$defaultGuardAttributes;
        } elseif (is_bool($unguarded)) {
            $this->guarded = !$unguarded;
        } elseif (is_string($unguarded)) {
            $unguarded = array_filter(array_map('trim', explode(',', $unguarded)));
        }

        if (is_array($unguarded) && count($unguarded) > 0) {
            $this->guarded = true;

            array_map(fn ($name) => static::allowAttribute($name), $unguarded);
        }

        if ($this->guarded && !static::resourceShouldBeGuarded($default)) {
            $this->guarded = false;
        }
    }

    /**
     * Workaround for https://github.com/vuejs/core/issues/5339
     */
    public static function selected($name, $value): bool
    {
        if (app(SpladeCore::class)->isSpladeRequest()) {
            return false;
        }

        $instance = Arr::last(static::$instances);

        $data = $instance->guardedData() ?: $instance->defaultData();

        return data_get($data, static::dottedName($name)) === $value;
    }

    public static function defaultUnguarded(bool $state = true)
    {
        static::$defaultGuardAttributes = !$state;
    }

    public static function guardWhen(Closure $callback)
    {
        static::$guardWhenCallable = $callback;
    }

    public static function allowAttribute(string $name)
    {
        static::$allowedAttributes[static::dottedName($name)] = true;
    }

    public static function parseEloquentRelation(string $name)
    {
        static::$eloquentRelations[static::dottedName($name)] = true;
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
            if (!Arr::has($rawData, $attribute)) {
                continue;
            }

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

    private function defaultData(): ?object
    {
        if ($this->data === null) {
            return null;
        }

        return (object) $this->data;
    }

    public function formData(): array
    {
        $data = [
            'data' => $this->guardedData() ?: $this->defaultData(),
            'json' => $this->json,
        ];

        static::$allowedAttributes = [];
        static::$eloquentRelations = [];

        array_pop(static::$instances);

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
