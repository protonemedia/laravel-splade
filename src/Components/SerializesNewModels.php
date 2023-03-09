<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Queue\QueueableCollection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use ProtoneMedia\Splade\QueueableCollectionWithNewModels;

trait SerializesNewModels
{
    use SerializesModels {
        getSerializedPropertyValue as getSerializedPropertyValueTrait;
        getRestoredPropertyValue as getRestoredPropertyValueTrait;
    }

    protected function getSerializedPropertyValue($value)
    {
        if ($value instanceof Model && !$value->exists) {
            return $value;
        }

        if ($value instanceof Collection
            && $value instanceof QueueableCollection
            && $value->first(fn ($model) => !$model->exists)
        ) {
            return QueueableCollectionWithNewModels::from($value);
        }

        return $this->getSerializedPropertyValueTrait($value);
    }

    protected function getRestoredPropertyValue($value)
    {
        if ($value instanceof Model && !$value->exists) {
            return $value;
        }

        if ($value instanceof QueueableCollectionWithNewModels) {
            return $value->restore();
        }

        return $this->getRestoredPropertyValueTrait($value);
    }
}
