<?php

namespace ProtoneMedia\Splade\Table;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Http\TableExportController;

class Export
{
    /**
     * This class represents a export within a Splade Table.
     */
    public function __construct(
        public string $key,
        public string $label,
        public string $filename,
        public string $type,
        public string $tableClass,
        public array $events,
    ) {
    }

    /**
     * Generates a slug based on the label.
     */
    public function getSlug(): string
    {
        return Str::slug($this->label);
    }

    /**
     * Generates a Signed URL to the export URL.
     */
    public function getUrl(): string
    {
        /** @var Route $route */
        $route = app('router')->getRoutes()->getByAction(TableExportController::class);

        return URL::signedRoute($route->getName(), array_merge(
            Arr::except(request()->query(), 'signature'),
            [
                'table'  => base64_encode($this->tableClass),
                'export' => base64_encode($this->key),
                'slug'   => $this->getSlug(),
            ]
        ));
    }
}
