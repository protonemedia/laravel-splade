<?php

return [

    'title_prefix' => '',

    'title_separator' => '',

    'title_suffix' => '',

    'defaults' => [

        'title' => env('APP_NAME', 'Laravel Splade'),

        'description' => 'Splade provides a super easy way to build Single Page Applications (SPA) using standard Laravel Blade templates, enhanced with renderless Vue 3 components.',

        'keywords' => ['Laravel', 'Splade'],

    ],

    'auto_canonical_link' => true,

    'open_graph' => [
        'auto_fill' => false,

        'type' => null, // 'WebPage'

        'site_name' => null,

        'title' => null,

        'url' => null,

        'image' => null,
    ],

    'twitter' => [
        'auto_fill' => false,

        'card' => null, // 'summary_large_image',

        'site' => null, // '@username',

        'title' => null,

        'description' => null,

        'image' => null,
    ],

];
