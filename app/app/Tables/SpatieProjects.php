<?php

namespace App\Tables;

use App\Models\Project;
use Illuminate\Support\Collection;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class SpatieProjects extends Projects
{
    public function for()
    {
        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhereHas('organization', function ($organization) use ($value) {
                            $organization->where('name', 'LIKE', "%{$value}%")
                                ->orWhereHas('address', function ($address) use ($value) {
                                    $address->where('city', 'LIKE', "%{$value}%");
                                });
                        });
                });
            });
        });

        return QueryBuilder::for(Project::query())
            ->defaultSort('name')
            ->allowedSorts(['name'])
            ->allowedFilters(['name', 'organization.name', $globalSearch]);
    }
}
