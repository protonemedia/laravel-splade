<?php

namespace ProtoneMedia\Splade\Components\Form;

use Illuminate\Support\Str;

trait InteractsWithFormElement
{
    /**
     * Transforms a bracket notation to a dotted notation.
     * Example: form[name] to form.name
     */
    protected static function transformBracketsToDots(string $name): string
    {
        return str_replace(['[', ']'], ['.', ''], $name);
    }

    /**
     * Transforms a name to a dotted notation and removes the
     * last '[]' from the name.
     */
    public static function dottedName(string $name): string
    {
        return static::transformBracketsToDots(Str::beforeLast($name, '[]'));
    }

    /**
     * Returns the key from the validator that represents the form key.
     */
    public function validationKey(): string
    {
        if (property_exists($this, 'validationKey') && $this->validationKey) {
            return $this->validationKey;
        }

        return $this->name;
    }

    /**
     * Returns the key of this element in the data object.
     */
    public function formKey(): string
    {
        if (property_exists($this, 'vModel') && $this->vModel) {
            return Str::startsWith($this->vModel, 'form.') ? substr($this->vModel, 5) : $this->vModel;
        }

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

    /**
     * Returns the v-model (if set), or computes it based on the form key.
     */
    public function vueModel(): string
    {
        if (property_exists($this, 'vModel') && $this->vModel) {
            return $this->vModel;
        }

        return "form.{$this->formKey()}";
    }
}
