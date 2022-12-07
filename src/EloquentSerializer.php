<?php

namespace ProtoneMedia\Splade;

use Illuminate\Queue\SerializesAndRestoresModelIdentifiers;

class EloquentSerializer
{
    use SerializesAndRestoresModelIdentifiers;

    /**
     * Get the value prepared for serialization.
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function serialize($value)
    {
        return $this->getSerializedPropertyValue($value);
    }

    /**
     * Get the restored value after deserialization.
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function restore($value)
    {
        return $this->getRestoredPropertyValue($value);
    }
}
