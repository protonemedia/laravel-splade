<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\UnauthorizedException;
use ProtoneMedia\Splade\AbstractTable;

class TableExportController extends Controller
{
    public function __invoke(Request $request, $table, $export)
    {
        $export = base64_decode($export);

        /** @var AbstractTable $tableInstance */
        $tableInstance = app(base64_decode($table));

        if (!$tableInstance->authorize($request)) {
            throw new UnauthorizedException;
        }

        return $tableInstance->makeExporter($export);
    }
}
