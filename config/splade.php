<?php

return [
    /**
     * The URI to handle Event Redirects.
     *
     * @see https://splade.dev/docs/x-event
     */
    'event_redirect_route'     => '/_splade/eventRedirect/{uuid}',

    /**
     * URI to handle Table Bulk Actions.
     *
     * @see https://splade.dev/docs/table-bulk-actions
     */
    'table_bulk_action_route'  => '/_splade/table/action/{table}/{action}/{slug}',

    /**
     * The URI to handle Table Export Actions.
     *
     * @see https://splade.dev/docs/table-exports
     */
    'table_export_route'       => '/_splade/table/export/{table}/{export}/{slug}',

    /**
     * Share all flash data to the Vue front-end app.
     *
     * @see https://splade.dev/docs/x-flash
     */
    'share_session_flash_data' => true,

    /**
     * Temporary directory for file uploads with Filepond.
     *
     * @see https://splade.dev/docs/form-file
     */
    'file_uploads'             => [
        'disk'                    => '',
        'temporary_file_lifetime' => 60 * 60, // 1 hour
        'route'                   => '/_splade/fileUpload',
    ],

    /**
     * Settings for the Splade Blade components.
     *
     * @see https://splade.dev/docs/form-overview
     */
    'blade'                    => [
        'component_prefix'           => 'splade',
        'table_cell_directive'       => 'cell',
        'escape_validation_messages' => true,
    ],

    /**
     * Server-side rendering (SSR) settings.
     *
     * @see https://splade.dev/docs/ssr
     */
    'ssr'                      => [
        'enabled'        => env('SPLADE_SSR_ENABLED', false),
        'server'         => 'http://127.0.0.1:9000/',
        'blade_fallback' => true,
    ],

    /**
     * Names of the Dusk macro to interact with Choices.js instances.
     *
     * @see https://splade.dev/docs/form-select
     */
    'dusk'                     => [
        'choices_select_macro'      => 'choicesSelect',
        'choices_remove_item_macro' => 'choicesRemoveItem',
    ],
];
