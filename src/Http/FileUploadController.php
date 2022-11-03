<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\SpladeCore;

class FileUploadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file'],
        ]);

        $uuid = Str::uuid();

        return response(
            encrypt($request->file('file')->store("uploads/{$uuid}", ['disk' => config('splade.file_upload_disk')])),
            200,
            [SpladeCore::HEADER_IGNORE => true]
        );
    }

    public function delete(Request $request)
    {
    }
}
