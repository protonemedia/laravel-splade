<?php

namespace Tests\Browser\Form;

use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Tests\Browser;
use Tests\DuskTestCase;

class FilepondExistingTest extends DuskTestCase
{
    public function setUp(): void
    {
        parent::setUp();

        DatabaseSeeder::giveUserMedia(User::first());
    }

    /** @test */
    public function it_can_keep_the_existing_single_media_upload()
    {
        $user = User::first();

        $media = $user->getFirstMedia('avatar');

        $this->assertNotNull($media);

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@avatar', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->pause(500)
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $this->assertTrue($user->fresh()->getFirstMedia('avatar')->is($media));
    }

    /** @test */
    public function it_can_replace_the_existing_single_media_upload()
    {
        $user = User::first();

        $media = $user->getFirstMedia('avatar');

        $this->assertNotNull($media);

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@avatar', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->pause(500)
                        ->press('.filepond--action-remove-item')
                        ->waitForText('Drag and drop your files')
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete', 10)
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $this->assertFalse($user->fresh()->getFirstMedia('avatar')->is($media));
    }

    /** @test */
    public function it_can_delete_the_existing_single_media_upload()
    {
        $user = User::first();

        $media = $user->getFirstMedia('avatar');

        $this->assertNotNull($media);

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@avatar', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->pause(500)
                        ->press('.filepond--action-remove-item')
                        ->waitForText('Drag and drop your files')
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $this->assertNull($user->fresh()->getFirstMedia('avatar'));
    }

    /** @test */
    public function it_can_keep_the_existing_multiple_media_uploads()
    {
        $user = User::first();

        $media = $user->getMedia('photos');

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@photos', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->pause(500)
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(2, $newMedia);

        $this->assertTrue($newMedia[0]->is($media[0]));
        $this->assertTrue($newMedia[1]->is($media[1]));
    }

    /** @test */
    public function it_can_add_a_file_to_the_existing_multiple_media_uploads()
    {
        $user = User::first();

        $media = $user->getMedia('photos');

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@photos', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->waitForText('Drag and drop your files')
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete', 10)
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(3, $newMedia);

        $this->assertTrue($newMedia[0]->is($media[0]));
        $this->assertTrue($newMedia[1]->is($media[1]));
        $this->assertEquals('small.jpeg', $newMedia[2]->file_name);
    }

    /** @test */
    public function it_can_delete_an_existing_multiple_media_upload()
    {
        $user = User::first();

        $media = $user->getMedia('photos');

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@photos', function (Browser $browser) {
                    $browser->waitForText('1.jpeg')
                        ->pause(500)
                        ->press('.filepond--action-remove-item')
                        ->pause(500)
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(1, $newMedia);

        $this->assertTrue($newMedia[0]->is($media[1]));
    }

    /** @test */
    public function it_can_reorder_multiple_uploads()
    {
        $user = User::first();

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@photos', function (Browser $browser) {
                    $formattedFilepondSelector = $browser->resolver->format('@photos-file-input');

                    $browser->waitForText('1.jpeg')
                        ->script("return document.querySelector('{$formattedFilepondSelector}').dispatchEvent(new CustomEvent('moveFile', { detail: [0, 2] }));");

                    $browser->pause(250)->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(2, $newMedia);

        $this->assertEquals('2.jpeg', $newMedia[0]->file_name);
        $this->assertEquals('1.jpeg', $newMedia[1]->file_name);
    }
}
