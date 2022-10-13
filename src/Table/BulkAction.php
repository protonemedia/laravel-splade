<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class BulkAction
{
    /**
     * This class represents a bulk action within a Splade Table.
     *
     * @param  string  $key
     * @param  string  $label
     * @param  string  $tableClass
     * @param  callable  $beforeCallback
     * @param  callable  $eachCallback
     * @param  callable  $afterCallback
     * @param  bool|string  $confirm = '',
     * @param  string  $confirmText = '',
     * @param  string  $confirmButton = '',
     * @param  string  $cancelButton = '',
     */
    public function __construct(
        public string $key,
        public string $label,
        public string $tableClass,
        public $beforeCallback,
        public $eachCallback,
        public $afterCallback,
        public bool|string $confirm = '',
        public string $confirmText = '',
        public string $confirmButton = '',
        public string $cancelButton = '',
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
