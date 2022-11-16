<?php

namespace Tests\Unit;

use Illuminate\Console\OutputStyle;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\Splade\Commands\CleanupTemporaryFileUploads;
use ProtoneMedia\Splade\FileUploads\Filesystem;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;
use Tests\TestCase;

class CleanupTemporaryFileUploadsTest extends TestCase
{
    /** @test */
    public function it_will_clean_files_older_than_one_hour()
    {
        Storage::fake('local');

        $filesystem = new Filesystem('local');

        Storage::put('splade-upload-new/image.jpg', 'new');
        Storage::put('splade-upload-old/image.jpg', 'old');

        touch(
            Storage::disk('local')->path('splade-upload-old'),
            time() - 3601
        );

        $command = new CleanupTemporaryFileUploads;
        $command->setOutput(new OutputStyle(new ArrayInput([]), new NullOutput));
        $command->handle($filesystem);

        Storage::assertExists('splade-upload-new/image.jpg');
        Storage::assertMissing('splade-upload-old/image.jpg');
    }
}
