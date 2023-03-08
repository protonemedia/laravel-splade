<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Database\ModelIdentifier;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class QueueableCollectionWithNewModels
{
    /**
     * Creates a new instance.
     */
    public function __construct(
        public Collection $collection,
        public ModelIdentifier $existingModels
    ) {
    }

    /**
     * It gets the existing models restored from the database
     * and merges them with the new models.
     */
    public function restore(): Collection
    {
        /** @var EloquentSerializer */
        $serializer = app(EloquentSerializer::class);

        $existingModels = $serializer->restore($this->existingModels)->keyBy->id;

        return $this->collection->map(function ($model) use ($existingModels) {
            if ($model instanceof Model && !$model->exists) {
                return $model;
            }

            return $existingModels->get($model->id);
        });
    }

    /**
     * Extracts the existing models into a ModelIdentifier and replaces the existing
     * models in the given Collection with a ModelIdentifier. Both the collection
     * and ModelIdentifier are passed to a new instance.
     */
    public static function from(Collection $collection): static
    {
        $collectionClass = get_class($collection);

        /** @var EloquentSerializer */
        $serializer = app(EloquentSerializer::class);

        $existingModels = $serializer->serialize(
            $collection->filter(fn ($model) => $model instanceof Model && $model->exists)
        );

        $collection = $collection->map(function ($model) use ($serializer) {
            return $model instanceof Model && $model->exists
                ? $serializer->serialize($model)
                : $model;
        })->pipeInto($collectionClass);

        return new static($collection, $existingModels);
    }
}
