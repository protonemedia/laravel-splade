<?php

namespace ProtoneMedia\Splade;

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Query\Builder as BaseQueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Kirschbaum\PowerJoins\PowerJoins;
use ProtoneMedia\Splade\Table\Column;
use ProtoneMedia\Splade\Table\Filter;
use ProtoneMedia\Splade\Table\PowerJoinsException;
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
     * @return \Illuminate\Support\Collection
     */
    public function parseTerms(string $terms): Collection
    {
        return Collection::make(str_getcsv($terms, ' ', '"'))
            ->filter()
            ->values()
            ->map(function (string $term) {
                return $this->ignoreCase ? Str::lower($term) : $term;
            });
    }

    private function getTermAndWhereOperator(string $term, string $searchMethod = null): array
    {
        $searchMethod = $searchMethod ?: SearchInput::WILDCARD;

        return match ($searchMethod) {
            SearchInput::EXACT          => [$term, '='],
            SearchInput::WILDCARD       => ["%{$term}%", 'LIKE'],
            SearchInput::WILDCARD_LEFT  => ["%{$term}", 'LIKE'],
            SearchInput::WILDCARD_RIGHT => ["{$term}%", 'LIKE'],
        };
    }

    private function qualifyColumn(EloquentBuilder $builder, string $column): string
    {
        $column = $builder->qualifyColumn($column);

        return $this->ignoreCase
             ? $builder->getGrammar()->wrap($column)
             : $column;
    }

    private function addTermConstraint(EloquentBuilder $builder, string $key, string $whereOperator, string $term)
    {
        $key = $this->qualifyColumn($builder, $key);

        $this->ignoreCase
            ? $builder->where(DB::raw("LOWER({$key})"), $whereOperator, $term)
            : $builder->where($key, $whereOperator, $term);
    }

    private function applyConstraint(array $columns, string $terms)
    {
        $terms = $this->parseTerm
            ? $this->parseTerms($terms)
            : Collection::wrap($terms);

        $this->builder->where(function (EloquentBuilder $builder) use ($columns, $terms) {
            $terms->each(function (string $term) use ($builder, $columns) {
                Collection::wrap($columns)->each(function (string $searchMethod, string $column) use ($builder, $term) {
                    [$term, $whereOperator] = $this->getTermAndWhereOperator($term, $searchMethod);

                    if (!Str::contains($column, '.')) {
                        return $this->addTermConstraint($builder, $column, $whereOperator, $term);
                    }

                    $relation = Str::beforeLast($column, '.');
                    $key      = Str::afterLast($column, '.');

                    $builder->orWhereHas(
                        $relation,
                        fn (EloquentBuilder $relation) => $this->addTermConstraint($relation, $key, $whereOperator, $term)
                    );
                });
            });
        });
    }

    private function applySorting(Column $column)
    {
        if (!$column->isNested()) {
            return $this->builder->orderBy($column->key, $column->sorted);
        }

        if (!trait_exists(PowerJoins::class)) {
            throw new PowerJoinsException(
                "To order the query using a column from a relationship, please install the 'kirschbaum-development/eloquent-power-joins' package."
            );
        }

        if (!method_exists($this->builder->getModel(), 'scopeOrderByLeftPowerJoins')) {
            throw new PowerJoinsException(
                "To order the query using a column from a relationship, make sure the Model uses the 'PowerJoins' trait."
            );
        }

        return $this->builder->orderByLeftPowerJoins($column->key, $column->sorted);
    }

    private function applyFilters()
    {
        $this->filters()->filter->value->each(
            fn (Filter $filter) => $this->applyConstraint([$filter->key => SearchInput::EXACT], $filter->value)
        );
    }

    private function applySearchInputs()
    {
        $this->searchInputs()->filter->value->each(
            fn (SearchInput $searchInput) => $this->applyConstraint($searchInput->columns, $searchInput->value)
        );
    }

    private function applySortingAndEagerLoading()
    {
        $hasAppliedSorting = $this->columns()->filter(function (Column $column) {
            if ($column->isNested()) {
                $this->builder->with($column->relationshipName());
            }

            if (!$column->sorted) {
                return false;
            }

            $this->applySorting($column);

            return true;
        })->isNotEmpty();

        if (!$this->defaultSort || $hasAppliedSorting) {
            return;
        }

        $defaultSortColumn = Str::startsWith($this->defaultSort, '-')
            ? Column::make(key: substr($this->defaultSort, 1), sorted: 'desc')
            : Column::make(key: $this->defaultSort, sorted: 'asc');

        $this->applySorting($defaultSortColumn);
    }

    private function loadResource()
    {
        if (!$this->paginateMethod) {
            return $this->resource = $this->builder->get();
        }

        $perPage = $this->query('perPage', $this->perPage ?: Arr::first($this->perPageOptions));

        $this->resource = $this->builder->{$this->paginateMethod}($perPage)->withQueryString();
    }

    public function prepare()
    {
        $this->applyFilters();
        $this->applySearchInputs();
        $this->applySortingAndEagerLoading();
        $this->loadResource();
    }
}
