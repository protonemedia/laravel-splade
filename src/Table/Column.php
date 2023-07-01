<?php

namespace ProtoneMedia\Splade\Table;

use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class Column implements Arrayable
{
    /**
     * This class represents a column within a Splade Table.
     *
     * @param  Closure|string  $exportFormat
     * @param  Closure|array  $exportStyling
     */
    public function __construct(
        public string $key,
        public string $label,
        public bool $canBeHidden,
        public bool $hidden,
        public bool|Closure $sortable,
        public bool|string $sorted,
        public bool $highlight,
        public bool|Closure $exportAs,
        public Closure|string|null $exportFormat = null,
        public Closure|array|null $exportStyling = null,
        public array|string|null $classes = null,
        public Closure|null $as = null,
        public string $alignment = 'left',
    ) {
        if (is_array($classes)) {
            $classes = Arr::flatten($classes);
        }

        $this->classes = Arr::toCssClasses($classes);
    }

    /**
     * Returns a clone of the instance.
     */
    public function clone(): static
    {
        return new static(
            $this->key,
            $this->label,
            $this->canBeHidden,
            $this->hidden,
            $this->sortable,
            $this->sorted,
            $this->highlight,
            $this->exportAs,
            $this->exportFormat,
            $this->exportStyling,
            $this->classes,
            $this->as,
            $this->alignment,
        );
    }

    /**
     * Returns an array with all properties.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'key'           => $this->key,
            'label'         => $this->label,
            'can_be_hidden' => $this->canBeHidden,
            'hidden'        => $this->hidden,
            'sortable'      => $this->sortable !== false,
            'sorted'        => $this->sorted,
            'highlight'     => $this->highlight,
            'alignment'     => $this->alignment,
        ];
    }

    /**
     * It gets thet data from the given item, based on the column
     * and whether that column is based on a relationship
     * Supports returning multiple items as well.
     *
     * @param  mixed  $item
     * @return mixed
     */
    public function getDataFromItem($item)
    {
        if ($this->isNested()) {
            $results = data_get($item, $this->relationshipName());

            if ($results instanceof Collection) {
                $key = $this->relationshipColumn();

                return $results->map->{$key}->implode(PHP_EOL);
            }
        }

        return data_get($item, $this->key, function () use ($item) {
            if (!is_object($item)) {
                return null;
            }

            return rescue(fn () => $item->{$this->key}, report: false);
        });
    }

    /**
     * Returns a boolean whether to columns refers to a relationship.
     */
    public function isNested(): bool
    {
        return Str::contains($this->key, '.');
    }

    /**
     * Returns the name of the relationship.
     */
    public function relationshipName(): string
    {
        return Str::beforeLast($this->key, '.');
    }

    /**
     * Returns the target column on the relationship.
     */
    public function relationshipColumn(): string
    {
        return Str::afterLast($this->key, '.');
    }

    public static function hashKey(string $name)
    {
        return md5($name);
    }

    public function keyHash(): string
    {
        return static::hashKey($this->key);
    }
}
