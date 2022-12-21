<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Testing\Assert;
use ProtoneMedia\Splade\FileUploads\ExistingFile;
use Tests\TestCase;

class ExistingFileTest extends TestCase
{
    /** @test */
    public function it_can_load_a_file_from_a_public_disk()
    {
        $file = ExistingFile::fromDisk('public')->get('1.jpeg');

        $this->assertInstanceOf(ExistingFile::class, $file);

        Assert::assertArraySubset([
            'source'  => [
                'preview_url' => 'http://localhost:8000/storage/1.jpeg',
                'name'        => '1.jpeg',
                'size'        => 3235,
                'type'        => 'image/jpeg',
            ],
            'options' => [
                'type'     => 'local',
                'metadata' => [
                    'identifier' => $file->getIdentifier(),
                ],
                'file'     => null,
            ],
        ], $file->toArray());
    }

    /** @test */
    public function it_can_load_a_file_from_a_public_disk_and_generate_a_temporary_url_for_the_preview()
    {
        Storage::fake('s3');

        Storage::disk('s3')->put('1.jpeg', file_get_contents(__DIR__ . '/../Browser/small.jpeg'));

        $file = ExistingFile::fromDisk('s3')->get('1.jpeg');

        $this->assertStringContainsString('?expiration=', $file->previewUrl);
    }

    /** @test */
    public function it_can_load_a_file_from_a_disk_without_a_preview()
    {
        $file = ExistingFile::fromDiskWithoutPreview('public')->get('1.jpeg');

        $this->assertInstanceOf(ExistingFile::class, $file);

        Assert::assertArraySubset([
            'source'  => null,
            'options' => [
                'type'     => 'local',
                'metadata' => [
                    'identifier' => $file->getIdentifier(),
                ],
                'file'     => [
                    'name' => '1.jpeg',
                    'size' => 3235,
                    'type' => 'image/jpeg',
                ],
            ],
        ], $file->toArray());
    }

    /** @test */
    public function it_throws_an_exception_if_the_file_does_not_exist()
    {
        try {
            ExistingFile::fromDisk('public')->get('does-not-exist.jpeg');
        } catch (FileNotFoundException $e) {
            return $this->assertTrue(true);
        }

        $this->fail('The file does not exist, but no exception was thrown.');
    }

    /** @test */
    public function it_can_load_multiple_files_at_once()
    {
        $files = ExistingFile::fromDisk('public')->get([
            '1.jpeg',
            '2.jpeg',
        ]);

        $this->assertCount(2, $files);

        $this->assertEquals('1.jpeg', $files[0]->name);
        $this->assertEquals('2.jpeg', $files[1]->name);
    }

    /** @test */
    public function it_can_serialize_the_instance_and_make_an_instance_out_of_it()
    {
        $file = ExistingFile::fromDisk('public')->get('1.jpeg')->metadata([
            'model' => User::firstOrFail(),
        ]);

        $serialized = $file->encryptAttributes();

        $file2 = ExistingFile::fromEncryptedString($serialized);

        $this->assertEquals($file, $file2);
    }

    /** @test */
    public function it_can_load_a_file_from_the_spatie_media_library()
    {
        $user = User::firstOrFail();

        $singleMedia = $user->getFirstMedia('photos');

        $file = ExistingFile::fromMediaLibrary($singleMedia);

        $this->assertTrue($file->getModel()->is($singleMedia));
    }

    /** @test */
    public function it_can_load_a_file_from_the_spatie_media_library_with_a_different_preview_conversion()
    {
        $user = User::firstOrFail();

        $singleMedia = $user->getFirstMedia('photos');

        $file = ExistingFile::fromMediaLibrary($singleMedia, 'thumb');

        $this->assertStringContainsString('-thumb.', $file->previewUrl);
    }

    /** @test */
    public function it_can_load_multiple_files_from_the_spatie_media_library()
    {
        $user = User::firstOrFail();

        $photos = $user->getMedia('photos');

        $this->assertTrue(count($photos) > 1);

        $files = ExistingFile::fromMediaLibrary($photos);

        $this->assertCount(count($photos), $files);
    }
}
