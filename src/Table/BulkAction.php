<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Routing\Route;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Http\TableBulkActionController;

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

    /**
     * Generates a slug based on the label.
     *
     * @return string
     */
    public function getSlug(): string
    {
        return Str::slug($this->label);
    }

    /**
     * Generates a Signed URL to the bulk action URL.
     *
     * @return string
     */
    public function getUrl(): string
    {
        /** @var Route $route */
        $route = app('router')->getRoutes()->getByAction(TableBulkActionController::class);

        return URL::signedRoute($route->getName(), [
            'table'  => base64_encode($this->tableClass),
            'action' => base64_encode($this->key),
            'slug'   => $this->getSlug(),
        ]);
    }
}
