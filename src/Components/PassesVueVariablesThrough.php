<?php

namespace ProtoneMedia\Splade\Components;

trait PassesVueVariablesThrough
{
    public function passthroughValue(): string
    {
        return implode([
            '{',
            $this->passthrough,
            '##SPLADE-PASSTHROUGH-',
            $this->passthrough ? 'APPEND' : 'NEW',
            '##',
            '}',
        ]);
    }
}
