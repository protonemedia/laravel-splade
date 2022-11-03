<?php

return [
    'event_redirect_route' => '/_splade/eventRedirect/{uuid}',

    'table_bulk_action_route' => '/_splade/table/action/{table}/{action}/{slug}',

    'table_export_route' => '/_splade/table/export/{table}/{export}/{slug}',

    'share_session_flash_data' => true,

    'file_uploads' => [

        'disk' => '',

        'temporary_file_lifetime' => 60 * 60 * 24, // 1 day

        'route' => '/_splade/fileUpload',

    ],

    'blade' => [
        'component_prefix' => 'splade',

        'table_cell_directive' => 'cell',
    ],

    'ssr' => [

        'enabled' => env('SPLADE_SSR_ENABLED', false),

        'server' => 'http://127.0.0.1:9000/',

        'blade_fallback' => true,

    ],

    'dusk' => [
        'choices_select_macro' => 'choicesSelect',

        'choices_remove_item_macro' => 'choicesRemoveItem',
    ],

];
