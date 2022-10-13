<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use ProtoneMedia\Splade\EventRedirect;

class EventRedirectController
{
    public function __invoke($uuid)
    {
        $data = Cache::pull(EventRedirect::class . $uuid);

        abort_unless($data, 404);

        return Redirect::to($data['target'])->with($data['with'] ?? []);
    }
}
