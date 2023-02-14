<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use ProtoneMedia\Splade\FileUploads\Filesystem;

class CleanupTemporaryFileUploads extends Command
{
    public $signature = 'splade:cleanup-uploads';

    public $description = 'Cleans the temporary file uploads';

    /**
     * Cleans the temporary file uploads.
     */
    public function handle(Filesystem $filesystem): int
    {
        $this->info('Cleaning up temporary file uploads...');

        $filesystem->deleteTemporaryFiles();

        $this->info('Done!');

        return static::SUCCESS;
    }
}
