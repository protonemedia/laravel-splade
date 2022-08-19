<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class Form extends Component
{
    use ParsesJsonDataAttribute;

    public $data;

    public $json;

    private $model;

    public static $eloquentAttributes = [];

    public static $eloquentRelations = [];

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($default = null, public string $scope = 'form', public bool $omitUnusedEloquentAttributes = true)
    {
        if ($default instanceof Model) {
            $this->model = $default;
        }

        static::$eloquentAttributes = [];
        static::$eloquentRelations  = [];

        $parsed = $this->parseJsonData($default);

        if ($parsed) {
            $this->data = $parsed;
        } else {
            $this->json = $default ?: '{}';
        }
    }

    public function eloquentData(): ?array
    {
        if (!$this->model || !$this->omitUnusedEloquentAttributes) {
            return null;
        }

        $eloquentData = $this->model->attributesToArray();

        $data = [];

        foreach (static::$eloquentAttributes as $attribute => $isEnabled) {
            if (!$isEnabled) {
                continue;
            }

            data_set($data, $attribute, data_get($eloquentData, $attribute));
        }

        foreach (static::$eloquentRelations as $relation => $isEnabled) {
            if (!$isEnabled) {
                continue;
            }

            $key = $this->model::$snakeAttributes ? Str::snake($relation) : $relation;

            data_set($data, $key, $this->getAttachedKeysFromRelation($relation));
        }

        static::$eloquentAttributes = [];
        static::$eloquentRelations  = [];

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

        return data_get($this->model, $relationName);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::form', [
            'data' => $this->data,
            'json' => $this->json,
        ]);
    }
}
