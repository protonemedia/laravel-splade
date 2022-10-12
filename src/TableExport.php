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
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use ProtoneMedia\Splade\Table\Column;

class TableExport implements
    FromQuery,
    Responsable,
    ShouldAutoSize,
    WithColumnFormatting,
    WithEvents,
    WithHeadings,
    WithMapping,
    WithStyles
{
    use Exportable;

    private $styles = [];

    public function __construct(
        private QueryBuilder $table,
        private $fileName,
        private $writerType
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
            if (!$column->exportFormat) {
                return [];
            }

            return [
                Coordinate::stringFromColumnIndex($key + 1) => call_user_func($column->exportFormat),
            ];
        })->all();
    }

    public function styles(Worksheet $sheet)
    {
        $highestRow = $sheet->getHighestRowAndColumn()['row'];

        $this->columns()->each(function (Column $column, $key) use ($sheet, $highestRow) {
            if (!$column->exportStyling) {
                return;
            }

            $sheetColumn = Coordinate::stringFromColumnIndex($key + 1);

            $style = $sheet->getStyle(
                "{$sheetColumn}2:{$sheetColumn}{$highestRow}"
            );

            call_user_func($column->exportStyling, $style);
        });
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

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->getSheet();
                $highest = $sheet->getHighestRowAndColumn();
                $sheet->setAutoFilter("A1:{$highest['column']}1");
            },
        ];
    }
}
