<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Routing\Controller;
use ProtoneMedia\Splade\AbstractTable;

class TableExportController extends Controller
{
    public function __invoke($table, $export)
    {
        $export = base64_decode($export);

        /** @var AbstractTable $tableInstance */
        $tableInstance = app(base64_decode($table));

        return $tableInstance->makeExporter($export);
    }
}
