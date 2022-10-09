<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Contracts\Database\Query\Builder as BaseQueryBuilder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Table\Column;
use ProtoneMedia\Splade\Table\Filter;
use ProtoneMedia\Splade\Table\SearchInput;

/**
 * @todo WIP, this class needs to refactod as you may see...
 */
class QueryBuilder extends SpladeTable
{
    private $paginateMethod;

    private $perPage;

    private bool $ignoreCase = true;

    /**
     * Parse the search term into multiple terms.
     */
    protected bool $parseTerm = true;

    public function __construct(private BaseQueryBuilder|EloquentBuilder $builder, Request $request = null)
    {
        parent::__construct([], $request);
    }

    public function paginate($perPage = null): self
    {
        $this->paginateMethod = 'paginate';

        $this->perPage = $perPage;

        return $this;
    }

    public function simplePaginate($perPage = null): self
    {
        $this->paginateMethod = 'simplePaginate';

        $this->perPage = $perPage;

        return $this;
    }

    public function cursorPaginate($perPage = null): self
    {
        $this->paginateMethod = 'cursorPaginate';

        $this->perPage = $perPage;

        return $this;
    }

    /**
     * Parse the terms and loop through them with the optional callable.
     *
     * @param  string  $terms
     * @param  callable  $callback
     * @return \Illuminate\Support\Collection
     */
    public function parseTerms(string $terms, callable $callback = null): Collection
    {
        $callback = $callback ?: fn () => null;

        return Collection::make(str_getcsv($terms, ' ', '"'))
            ->filter()
            ->values()
            ->map(function (string $term) {
                return $this->ignoreCase ? Str::lower($term) : $term;
            })
            ->when($callback !== null, function ($terms) use ($callback) {
                return $terms->each(fn ($value, $key) => $callback($value, $key));
            });
    }

    private function getTermAndWhereOperator($term, $searchMethod): array
    {
        $searchMethod = $searchMethod ?: SearchInput::WILDCARD;

        return match ($searchMethod) {
            SearchInput::EXACT          => [$term, '='],
            SearchInput::WILDCARD       => ["%{$term}%", 'LIKE'],
            SearchInput::WILDCARD_LEFT  => ["%{$term}", 'LIKE'],
            SearchInput::WILDCARD_RIGHT => ["{$term}%", 'LIKE'],
        };
    }

    private function applyWhere($builder, $columns, $terms)
    {
        $columns = Collection::wrap($columns);

        $terms = $this->parseTerm ? $this->parseTerms($terms) : $terms;

        $builder->where(function (BaseQueryBuilder $builder) use ($columns, $terms) {
            $terms->each(function ($term) use ($builder, $columns) {
                $columns->each(function ($searchMethod, $column) use ($builder, $term) {
                    [$term, $whereOperator] = $this->getTermAndWhereOperator($term, $searchMethod);

                    if (Str::contains($column, '.')) {
                        $relation = Str::beforeLast($column, '.');

                        $key = Str::after($column, "{$relation}.");

                        /** @var EloquentBuilder $builder */
                        $builder->orWhereHas($relation, function (EloquentBuilder $relation) use ($key, $term, $whereOperator) {
                            $key = $relation->qualifyColumn($key);

                            $key = $this->ignoreCase
                                ? $relation->getGrammar()->wrap($key)
                                : $key;

                            $this->ignoreCase
                                ? $relation->where(DB::raw("LOWER({$key})"), $whereOperator, $term)
                                : $relation->where($key, $whereOperator, $term);
                        });

                        return;
                    }

                    $column = $builder->qualifyColumn($column);

                    $column = $this->ignoreCase
                        ? $builder->getGrammar()->wrap($column)
                        : $column;

                    $this->ignoreCase
                        ? $builder->orWhere(DB::raw("LOWER({$column})"), $whereOperator, $term)
                        : $builder->orWhere($column, $whereOperator, $term);
                });
            });
        });
    }

    private function orderByRelationship(Column $column)
    {
        /** @var EloquentBuilder $builder */
        $builder = $this->builder;

        /** @var Relation $relation */
        $relation = $builder->getModel()->{$column->relationshipName()}();

        $subquery = tap($relation->getModel()->newModelQuery(), function (EloquentBuilder $subquery) use ($column) {
            $subquery->select(
                $subquery->qualifyColumn($column->relationshipColumn())
            );
        });

        if ($relation instanceof BelongsTo) {
            $subquery->whereColumn(
                $subquery->qualifyColumn($relation->getOwnerKeyName()),
                $builder->qualifyColumn($relation->getForeignKeyName())
            );
        } elseif ($relation instanceof HasOne) {
            $subquery->whereColumn(
                $subquery->qualifyColumn($relation->getQualifiedForeignKeyName()),
                $builder->qualifyColumn($relation->getQualifiedParentKeyName())
            );
        }

        $this->builder->orderBy($subquery, $column->sorted);
    }

    public function prepare()
    {
        $this->searchInputs()->filter->value->each(function (SearchInput $searchInput) {
            $this->applyWhere(
                $this->builder,
                $searchInput->columns,
                $searchInput->value,
            );
        });

        $this->filters()->filter->value->each(function (Filter $filter) {
            $this->applyWhere(
                $this->builder,
                [$filter->key => SearchInput::EXACT],
                $filter->value,
            );
        });

        $this->columns()->each(function (Column $column) {
            if ($column->isNested()) {
                $this->builder->with($column->relationshipName());
            }

            if (!$column->sorted) {
                return;
            }

            $column->isNested()
                ? $this->orderByRelationship($column)
                : $this->builder->orderBy($column->key, $column->sorted);
        });

        if ($this->paginateMethod) {
            $perPage = $this->query('perPage', $this->perPage ?: Arr::first($this->perPageOptions));

            $this->resource = $this->builder->{$this->paginateMethod}($perPage)->withQueryString();
        } else {
            $this->resource = $this->builder->get();
        }
    }
}
