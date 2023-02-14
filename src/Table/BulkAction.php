<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Routing\Route;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Http\TableBulkActionController;

class BulkAction
{
    public bool|string $requirePassword = false;

    /**
     * This class represents a bulk action within a Splade Table.
     *
     * @param  callable  $beforeCallback
     * @param  callable  $eachCallback
     * @param  callable  $afterCallback
     * @param  bool|string  $confirm = '',
     * @param  string  $confirmText = '',
     * @param  string  $confirmButton = '',
     * @param  string  $cancelButton = '',
     * @param  bool  $requirePassword = '',
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
        bool $requirePassword = false,
    ) {
        if ($requirePassword === true) {
            $this->requirePassword = 'password';
        }
    }

    /**
     * Generates a slug based on the label.
     */
    public function getSlug(): string
    {
        return Str::slug($this->label);
    }

    /**
     * Generates a Signed URL to the bulk action URL.
     */
    public function getUrl(): string
    {
        /** @var Route */
        $route = app('router')->getRoutes()->getByAction(TableBulkActionController::class);

        /** @var array */
        $currentQuery = app()->bound('request') ? request()->query() : [];

        return URL::signedRoute($route->getName(), array_merge($currentQuery, [
            'table'  => base64_encode($this->tableClass),
            'action' => base64_encode($this->key),
            'slug'   => $this->getSlug(),
        ]));
    }
}
