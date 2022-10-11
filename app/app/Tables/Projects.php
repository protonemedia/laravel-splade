<?php

namespace App\Tables;

use App\Models\Project;
use ProtoneMedia\Splade\SpladeTable;

class Projects extends AbstractTable
{
    public function for()
    {
        return Project::class;
    }

    public function configure(SpladeTable $table)
    {
        $table
            ->withGlobalSearch(columns: [
                'name',
                'organization.name',
                'organization.address.city',
            ])
            ->action('Touch', function (Project $project) {
                $project->touch();
            })
            ->column('name', 'Project Name', sortable: true)
            ->column('updated_at', 'Project Updated', sortable: true)
            ->column('organization.name', 'Organization Name', sortable: true)
            ->column('organization.address.city', 'Organization City', sortable: true, searchable: true)
            ->paginate(15);
    }
}
