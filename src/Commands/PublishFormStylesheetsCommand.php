<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class PublishFormStylesheetsCommand extends Command
{
    public $signature = 'splade:publish-form-stylesheets';

    public $description = 'Publish the stylesheets for Choices.js and Flatpickr';

    public function handle(): int
    {
        (new Filesystem)->ensureDirectoryExists(resource_path('css'));

        copy(__DIR__ . '/../../lib/Components/choices.scss', resource_path('css'));
        copy(__DIR__ . '/../../lib/Components/flatpickr.styl', resource_path('css'));

        $this->comment('All done');

        $this->comment('Please install the required pre-processors with "npm add -D sass stylus", and import the published stylesheet in "app.js".');

        return self::SUCCESS;
    }
}
