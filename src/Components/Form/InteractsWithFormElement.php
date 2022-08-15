<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;

trait InteractsWithFormElement
{
    protected function convertBracketsToDots($name): string
    {
        return str_replace(['[', ']'], ['.', ''], $name);
    }

    public function validationName()
    {
        return property_exists($this, 'validationName')
            ? ($this->validationName ?: $this->name)
            : $this->name;
    }

    public function vueModel()
    {
        $name = $this->convertBracketsToDots(Str::before($this->name, '[]'));

        return "form.{$name}";
    }
}
