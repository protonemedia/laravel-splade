<?php

namespace ProtoneMedia\Splade;

use Illuminate\View\ComponentAttributeBag;

class FormSelectOption
{
    public function __construct(private array $attributes = [])
    {
    }

    public function isGroup(): bool
    {
        return array_key_exists('options', $this->attributes);
    }

    public function getOptions(): array
    {
        return $this->attributes['options'] ?? [];
    }

    public function attributes(): ComponentAttributeBag
    {
        return (new ComponentAttributeBag($this->attributes))->except('options');
    }
}
