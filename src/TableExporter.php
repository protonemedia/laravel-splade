<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Query\Builder as BaseQueryBuilder;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use ProtoneMedia\Splade\Table\Column;
use Spatie\QueryBuilder\QueryBuilder as SpatieQueryBuilder;

class TableExporter implements FromQuery, Responsable, ShouldAutoSize, WithColumnFormatting, WithEvents, WithHeadings, WithMapping, WithStyles
{
    use Exportable;

    private $styles = [];

    public function __construct(
        private SpladeQueryBuilder $table,
        private $fileName,
        private $writerType,
        private array $events,
    ) {
    }

    /**
     * Returns the Query Builder to fetch the records.
     */
    public function query(): BaseQueryBuilder|EloquentBuilder|SpatieQueryBuilder
    {
        return $this->table->getBuilderForExport();
    }

    /**
     * Returns a collection with all columns used in the export.
     */
    private function columns(): Collection
    {
        return $this->table->columns()->reject(function (Column $column) {
            return $column->exportAs === false;
        })->values();
    }

    /**
     * Returns an array of all column labels.
     */
    public function headings(): array
    {
        return $this->columns()->map->label->all();
    }

    /**
     * Returns an array with optional formatting for the columns.
     */
    public function columnFormats(): array
    {
        return $this->columns()->mapWithKeys(function (Column $column, $key) {
            $exportFormat = $column->exportFormat;

            if (!$exportFormat) {
                return [];
            }

            $format = is_callable($exportFormat)
                ? call_user_func($exportFormat)
                : $exportFormat;

            return [
                Coordinate::stringFromColumnIndex($key + 1) => $format,
            ];
        })->all();
    }

    /**
     * Returns an array with optional styling for each column. The column
     * may also be styled with a callback.
     *
     * @return array
     */
    public function styles(Worksheet $sheet)
    {
        $highest = $sheet->getHighestRowAndColumn();

        $highestRow    = $highest['row'];
        $highestColumn = $highest['column'];

        $sheet->setAutoFilter("A1:{$highestColumn}1");

        return $this->columns()->mapWithKeys(function (Column $column, $key) use ($sheet, $highestRow) {
            $exportStyling = $column->exportStyling;

            if (!$exportStyling) {
                return [];
            }

            $sheetColumn = Coordinate::stringFromColumnIndex($key + 1);
            $coordinate  = "{$sheetColumn}2:{$sheetColumn}{$highestRow}";

            if (is_array($exportStyling)) {
                return [$coordinate => $exportStyling];
            }

            call_user_func($exportStyling, $sheet->getStyle($coordinate));

            return [];
        })->all();
    }

    /**
     * Maps an item into cells for a row.
     *
     * @param  mixed  $item
     */
    public function map($item): array
    {
        return $this->columns()->map(function (Column $column) use ($item) {
            $value = $column->getDataFromItem($item);

            if (is_callable($exportAs = $column->exportAs)) {
                return call_user_func($exportAs, $value, $item, $this->writerType);
            }

            if (is_callable($as = $column->as)) {
                return call_user_func($as, $value, $item);
            }

            return $value;
        })->all();
    }

    /**
     * An array with Events that should be registered.
     * https://docs.laravel-excel.com/3.1/exports/extending.html#events
     */
    public function registerEvents(): array
    {
        return $this->events;
    }
}
