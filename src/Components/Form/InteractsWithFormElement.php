<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;

trait InteractsWithFormElement
{
    protected function convertBracketsToDots($name): string
    {
        return str_replace(['[', ']'], ['.', ''], $name);
    }

    public function validationKey(): string
    {
        if (property_exists($this, 'validationKey') && $this->validationKey) {
            return $this->validationKey;
        }

        return $this->name;
    }

    public function dottedName(string $name): string
    {
        return $this->convertBracketsToDots(Str::before($name, '[]'));
    }

    public function formKey(): string
    {
        return $this->dottedName($this->name);
    }

    public function vueModel(): string
    {
        return "form.{$this->formKey()}";
    }
}
