<?php

return [
    'event_redirect_route' => '/_splade/eventRedirect/{uuid}',

    'file_upload_route' => '/_splade/fileUpload',

    'table_bulk_action_route' => '/_splade/table/action/{table}/{action}/{slug}',

    'table_export_route' => '/_splade/table/export/{table}/{export}/{slug}',

    'share_session_flash_data' => true,

    'file_upload_disk' => 'local',

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
