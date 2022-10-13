<?php

namespace App\Tables;

use App\Models\Project;
use Maatwebsite\Excel\Excel;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Style\Style;
use ProtoneMedia\Splade\Facades\Toast;
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
            ->bulkAction(
                label: 'Touch timestamp',
                each: fn (Project $project) => $project->touch(),
                after: fn () => Toast::info('Timestamps updated!')
            )
            ->export()
            ->export('CSV export', 'projects.csv', Excel::CSV)
            ->column('name', highlight: true, sortable: true)
            ->column('updated_at', 'Project Updated', exportFormat: function () {
                return NumberFormat::FORMAT_DATE_TIME2;
            })
            ->column('organization.name', sortable: true, exportAs: false)
            ->column('organization.address.city', 'Organization City', sortable: true, exportStyling: function (Style $style) {
                $style->getFont()->setBold(true);
            })
            ->paginate(15);
    }
}
