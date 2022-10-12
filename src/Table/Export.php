<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class Export
{
    /**
     * This class represents a export within a Splade Table.
     *
     * @param  string  $key
     * @param  string  $label
     * @param  string  $filename
     * @param  string  $type
     * @param  string  $tableClass
     */
    public function __construct(
        public string $key,
        public string $label,
        public string $filename,
        public string $type,
        public string $tableClass,
    ) {
    }

    public function getSlug(): string
    {
        return Str::slug($this->label);
    }

    public function getUrl(): string
    {
        return URL::signedRoute('splade.tableExport', array_merge(
            Arr::except(request()->query(), 'signature'),
            [
                'table'  => base64_encode($this->tableClass),
                'export' => base64_encode($this->key),
                'slug'   => $this->getSlug(),
            ]
        ));
    }
}
