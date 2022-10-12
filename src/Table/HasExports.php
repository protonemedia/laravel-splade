<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;

trait HasExports
{
    protected array $exports = [];

    /**
     * Returns the exports.
     *
     * @return array
     */
    public function getExports(): array
    {
        return $this->exports;
    }

    /**
     * Returns a boolean whether this table has exports.
     *
     * @return boolean
     */
    public function hasExports(): bool
    {
        return !empty($this->exports);
    }

    /**
     * Adds an export.
     *
     * @param string|null $label
     * @param string|null $filename
     * @param string|null $type
     * @return self
     */
    public function export(
        string $label = null,
        string $filename = null,
        string $type = null,
    ): self {
        if (!class_exists(Excel::class)) {
            throw new LaravelExcelException(
                "To generate exports from a Splade Table, please install the 'maatwebsite/excel' package."
            );
        }

        if ($filename === null) {
            $filename = $this->configurator
                ? Str::slug(class_basename($this->configurator)) . '.xlsx'
                : 'export.xlsx';
        }

        $key = count($this->exports);

        $this->exports[$key] = new Export(
            key: $key,
            label: $label ?: __('Excel Export'),
            filename: $filename,
            type: $type ?: Excel::XLSX,
            tableClass: get_class($this->configurator),
        );

        return $this;
    }
}
