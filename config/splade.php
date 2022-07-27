<?php

return [
    'event_redirect_route' => '/_splade/eventRedirect/{uuid}',

    'share_session_flash_data' => true,

    'blade' => [
        'component_prefix' => 'splade',
    ],

    'ssr' => [

        'enabled' => env('SPLADE_SSR_ENABLED', false),

        'server' => 'http://127.0.0.1:9000/',

        'blade_fallback' => true,

    ],

];
