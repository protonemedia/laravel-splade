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
        public bool $sortable,
        public bool|string $sorted,
        public bool $highlight,
        public bool|Closure $exportAs,
        public Closure|string|null $exportFormat = null,
        public Closure|array|null $exportStyling = null,
        public array|string|null $classes = null,
        public Closure|null $as = null,
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
            'sortable'      => $this->sortable,
            'sorted'        => $this->sorted,
            'highlight'     => $this->highlight,
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

        if ($this->isJson()) {
            $key = Str::replace('->', '.', $this->key);
            $topKey = explode('.', $key)[0];
            $columnCast = isset($item->getCasts()[$topKey]) ? $item->getCasts()[$topKey] : null;

            if (!is_null($columnCast)) {
                switch ($columnCast) {
                    case 'array':
                        return data_get($item->toArray(), $key);
                        break;
                    case 'json':
                    case 'object':
                        return data_get($item, $key);
                        break;
                }
            } else {
                if ($item->hasCast($topKey) && $item->getConnection()->getSchemaBuilder()->getColumnType($item->getTable(), $topKey) == "json") {
                    // However for some reason for me I get error on that one:
                    // `Class "Doctrine\DBAL\Driver\AbstractMySQLDriver" not found in 
                    // vendor/laravel/framework/src/Illuminate/Database/PDO/MySqlDriver.php on line 8.`
                    $item->$topKey = json_decode($item->$topKey);
                    return data_get($item, $key);
                }
            }
        }

        return data_get($item, $this->key);
    }

    /**
     * Returns a boolean whether to columns refers to a relationship.
     */
    public function isNested(): bool
    {
        return Str::contains($this->key, '.');
    }

    /**
     * Returns a boolean whether to columns is json 
     *
     * @return bool
     */
    public function isJson(): bool
    {
        return Str::contains($this->key, '->');
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
