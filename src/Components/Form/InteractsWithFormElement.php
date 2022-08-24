<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;

trait InteractsWithFormElement
{
    protected static function convertBracketsToDots($name): string
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

    public static function dottedName(string $name): string
    {
        return static::convertBracketsToDots(Str::before($name, '[]'));
    }

    public function formKey(): string
    {
        return collect(explode('.', static::dottedName($this->name)))
            ->map(function (string $segment, int $index) {
                if ($index === 0) {
                    return $segment;
                }

                if (is_numeric($segment)) {
                    return "[{$segment}]";
                }

                return ".{$segment}";
            })
            ->implode('');
    }

    public function vueModel(): string
    {
        return "form.{$this->formKey()}";
    }
}
