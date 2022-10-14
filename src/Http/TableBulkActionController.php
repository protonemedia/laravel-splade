<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\UnauthorizedException;
use ProtoneMedia\Splade\AbstractTable;

class TableBulkActionController extends Controller
{
    public function __invoke(Request $request, $table, $action): RedirectResponse
    {
        $request->validate([
            'ids' => ['required', 'array', 'min:1'],
        ]);

        $action = base64_decode($action);

        /** @var AbstractTable $tableInstance */
        $tableInstance = app(base64_decode($table));

        if (!$tableInstance->authorize($request)) {
            throw new UnauthorizedException;
        }

        $tableInstance->performBulkAction($action, $request->input('ids', []));

        return redirect()->back();
    }
}
