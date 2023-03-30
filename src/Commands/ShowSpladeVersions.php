<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class ShowSpladeVersions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'splade:show-versions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Show the composer and npm versions of the Splade packages';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $composerLockFile = $this->get(base_path('composer.lock'));
        $npmLockFile      = $this->get(base_path('package-lock.json'));

        $composerPackage = collect($composerLockFile['packages'] ?? [])
            ->merge($composerLockFile['packages-dev'] ?? [])
            ->firstWhere('name', 'protonemedia/laravel-splade');

        $npmPackage = collect($npmLockFile['packages'] ?? [])
            ->merge($npmLockFile['dependencies'] ?? [])
            ->first(function (array $value, string $name) {
                return Str::endsWith($name, '@protonemedia/laravel-splade');
            })['version'] ?? null;

        $composerPackage
            ? $this->info('Composer (PHP) package version: ' . $composerPackage['version'])
            : $this->error('Composer (PHP) package not found');

        $npmPackage
            ? $this->info("NPM (JS) package version: {$npmPackage}")
            : $this->error('NPM (JS) package not found');

        return Command::SUCCESS;
    }

    /**
     * Get the contents of a file.
     *
     * @param  string  $path
     */
    private function get($path): array
    {
        if (!file_exists($path)) {
            return [];
        }

        $contents = file_get_contents($path);

        return json_decode($contents, true) ?: [];
    }
}
