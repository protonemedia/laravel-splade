<?php

declare(strict_types=1);

use Translator\Framework\LaravelConfigLoader;
use Translator\Infra\LaravelJsonTranslationRepository;

return [
    'languages'   => ['en'],
    'directories' => [
        base_path('../resources/views'),
        base_path('../src'),
    ],
    'output'     => base_path('../resources/lang'),
    'extensions' => ['php'],
    'container'  => [
        'config_loader'          => LaravelConfigLoader::class,
        'translation_repository' => LaravelJsonTranslationRepository::class,
    ],
];
