<?php

return [
    'event_redirect_route' => '/_splade/eventRedirect/{uuid}',

    'share_session_flash_data' => true,

    'blade' => [
        'component_prefix' => 'splade',

        'table_cell_directive' => 'cell',
    ],

    'seo' => [

        'title_prefix' => '',

        'title_suffix' => '',

        'defaults' => [

            'title' => env('APP_NAME', 'Laravel Splade'),

            'description' => 'Splade provides a super easy way to build Single Page Applications (SPA) using standard Laravel Blade templates, enhanced with renderless Vue 3 components.',

            'keywords' => ['Laravel', 'Splade'],

        ],

    ],

    'ssr' => [

        'enabled' => env('SPLADE_SSR_ENABLED', false),

        'server' => 'http://127.0.0.1:9000/',

        'blade_fallback' => true,

    ],

];
