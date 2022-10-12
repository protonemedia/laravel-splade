<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class BulkAction
{
    /**
     * This class represents a bulk action within a Splade Table.
     *
     * @param string $key
     * @param string $label
     * @param string $tableClass
     * @param callable $beforeCallback
     * @param callable $eachCallback
     * @param callable $afterCallback
     */
    public function __construct(
        public string $key,
        public string $label,
        public string $tableClass,
        public $beforeCallback,
        public $eachCallback,
        public $afterCallback,
    ) {
    }

    public function getSlug(): string
    {
        return Str::slug($this->label);
    }

    public function getUrl(): string
    {
        return URL::signedRoute('splade.tableAction', [
            'table'  => base64_encode($this->tableClass),
            'action' => base64_encode($this->key),
            'slug'   => $this->getSlug(),
        ]);
    }
}
