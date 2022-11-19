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

    public string $spladeId;

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
    public function __construct(
        $default = null,
        public string $scope = 'form',
        $unguarded = null,
        public bool $scrollOnError = true,
        public array|bool|string $submitOnChange = false,
    ) {
        // We'll use this instance in the static 'selected()' method,
        // which is a workaround for a Vue bug. Later, when the
        // Form Data is resolved, we remove it from the array.
        static::$instances[] = $this;

        // This ID will be passed to Vue so can inspect all form
        // elements within this form, and act when there's
        // missing data in the default dataset.
        $this->spladeId = Str::random();

        static::$allowedAttributes = [];
        static::$eloquentRelations = [];

        $this->parseResource($default);
        $this->parseUnguardedValue($unguarded, $default);

        if (is_string($submitOnChange)) {
            $this->submitOnChange = static::splitByComma($submitOnChange);
        }
    }

    /**
     * Split the value by comma, trim each item, and filter empty items.
     *
     * @param  string  $value
     * @return array
     */
    public static function splitByComma(string $value): array
    {
        return array_filter(array_map('trim', explode(',', $value)));
    }

    /**
     * It checks whether the given value is an Eloquent Model, and it tries
     * to parse the given data. If it can't be parsed, for example, when
     * it is a JavaScript object, then it sets the $json attribute.
     *
     * @param  mixed  $default
     * @return mixed
     */
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

    /**
     * Determine whether the form attribute should be unguarded, fully guarded,
     * or whether some attributes should be guarded.
     *
     * @param  mixed  $unguarded
     * @param  mixed  $value
     * @return void
     */
    private function parseUnguardedValue($unguarded = null, $value = null)
    {
        if ($unguarded === null) {
            // Use the default configuration.
            $this->guarded = static::$defaultGuardAttributes;
        } elseif (is_bool($unguarded)) {
            // If we don't unguard, we guard.
            $this->guarded = !$unguarded;
        } elseif (is_string($unguarded)) {
            // If it's a string, parse it into an array.
            $unguarded = static::splitByComma($unguarded);
        }

        // If there are unguarded attributes, allow those and guard the others.
        if (is_array($unguarded) && count($unguarded) > 0) {
            $this->guarded = true;

            array_map(fn ($name) => static::allowAttribute($name), $unguarded);
        }

        // Lastly, check whether the given value should be unguarded.
        if ($this->guarded && !static::resourceShouldBeGuarded($value)) {
            $this->guarded = false;
        }
    }

    /**
     * This is a workaround for https://github.com/vuejs/core/issues/5339
     *
     * Is returns a boolean whether the given value is selected
     * in the select element with the given name.
     *
     * @param  string  $name
     * @param  mixed  $value
     * @return bool
     */
    public static function selected(string $name, $value): bool
    {
        if (app(SpladeCore::class)->isSpladeRequest()) {
            return false;
        }

        $instance = Arr::last(static::$instances);

        $data = data_get(
            $instance->guardedData() ?: $instance->defaultData(),
            static::dottedName($name)
        );

        return is_array($data)
            ? in_array($value, $data, true)
            : $data === $value;
    }

    /**
     * Setter to unguard everything by default.
     *
     * @param  bool  $state
     * @return void
     */
    public static function defaultUnguarded(bool $state = true)
    {
        static::$defaultGuardAttributes = !$state;
    }

    /**
     * Sets a Closure that takes the bound resource as an argument
     * and returns whether it should be guarded.
     *
     * @param  Closure  $callback
     * @return void
     */
    public static function guardWhen(Closure $callback)
    {
        static::$guardWhenCallable = $callback;
    }

    /**
     * Adds the given attribute to the allowed attributes array.
     *
     * @param  string  $name
     * @return void
     */
    public static function allowAttribute(string $name)
    {
        if ($name) {
            static::$allowedAttributes[static::dottedName($name)] = true;
        }
    }

    /**
     * Adds the given relation to the list of Eloquent relations that should be parsed.
     *
     * @param  string  $name
     * @return void
     */
    public static function parseEloquentRelation(string $name)
    {
        if ($name) {
            static::$eloquentRelations[static::dottedName($name)] = true;
        }
    }

    /**
     * Determines whether a resource should be fully guarded.
     *
     * @param  mixed  $resource
     * @return bool
     */
    private static function resourceShouldBeGuarded($resource): bool
    {
        $callback = static::$guardWhenCallable ?: function ($resource) {
            return $resource instanceof Fluent || $resource instanceof Model;
        };

        return $callback($resource);
    }

    /**
     * Returns an array with all allowed attributes, sorted by their length.
     *
     * @return \Illuminate\Support\Collection
     */
    private static function allowedAttributesSorted(): Collection
    {
        return Collection::make(static::$allowedAttributes)
            ->filter()
            ->keys()
            ->sortBy(function ($key) {
                return Str::substrCount($key, '.');
            })
            ->values();
    }

    /**
     * Returns the guarded data.
     *
     * @return object|null
     */
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

        // Loop through all attributes, and add the data to the $guardedData when it exists.
        static::allowedAttributesSorted()->each(function ($attribute) use ($rawData, &$guardedData) {
            if (Arr::has($rawData, $attribute)) {
                return data_set($guardedData, $attribute, data_get($rawData, $attribute));
            }

            if (!$this->model) {
                return;
            }

            $parts = explode('.', $attribute);

            if (count($parts) < 2) {
                return;
            }

            $column = array_pop($parts);

            $relation = data_get($this->model, implode('.', $parts));

            $relationAttributes = $relation->attributesToArray();

            if (Arr::has($relationAttributes, $column)) {
                data_set($guardedData, $attribute, data_get($relationAttributes, $column));
            }
        });

        if (!$this->model) {
            return (object) $guardedData;
        }

        // If we're handling an Eloquent Model, loop through the allowed,
        // relations, and add the attached keys to $guardedData.
        foreach (static::$eloquentRelations as $relation => $isEnabled) {
            if (!$isEnabled) {
                continue;
            }

            $key = $this->model::$snakeAttributes ? Str::snake($relation) : $relation;

            data_set($guardedData, $key, $this->getAttachedKeysFromRelation($relation));
        }

        return (object) $guardedData;
    }

    /**
     * Returns the attached keys from the given relationship.
     *
     * @param  string  $relationName
     * @return array|null
     */
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
     * Returns the default data object, when set.
     *
     * @return object|null
     */
    private function defaultData(): ?object
    {
        if ($this->data === null) {
            return null;
        }

        return (object) $this->data;
    }

    /**
     * This is data that will be passed to the Vue component. We include
     * both the parsed data, as well as the raw json data, in case
     * there's no parsed data. Then we reset the static arrays.
     *
     * @return array
     */
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

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.form');
    }
}
