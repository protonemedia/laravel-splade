<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;

trait InteractsWithFormElement
{
    protected function convertBracketsToDots($name): string
    {
        return str_replace(['[', ']'], ['.', ''], $name);
    }

    public function validationName(): string
    {
        if (property_exists($this, 'validationName') && $this->validationName) {
            return $this->validationName;
        }

        return $this->name;
    }

    public function dottedName(string $name): string
    {
        return $this->convertBracketsToDots(Str::before($name, '[]'));
    }

    public function vueModel(): string
    {
        return "form.{$this->dottedName($this->name)}";
    }
}
