<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Responsable;
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

    public function query()
    {
        return $this->table->getBuilderForExport();
    }

    private function columns(): Collection
    {
        return $this->table->columns()->reject(function (Column $column) {
            return $column->exportAs === false;
        })->values();
    }

    public function headings(): array
    {
        return $this->columns()->map->label->all();
    }

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

    public function map($item): array
    {
        return $this->columns()->map(function (Column $column) use ($item) {
            $exportAs = $column->exportAs;

            $value = $column->getDataFromItem($item);

            return is_callable($exportAs)
                ? call_user_func($exportAs, $value, $item, $this->writerType)
                : $value;
        })->all();
    }

    /**
     * https://docs.laravel-excel.com/3.1/exports/extending.html#events
     *
     * @return array
     */
    public function registerEvents(): array
    {
        return $this->events;
    }
}
