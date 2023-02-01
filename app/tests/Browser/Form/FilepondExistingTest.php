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
                        ->pause(250)
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
                        ->pause(250)
                        ->press('.filepond--action-remove-item')
                        ->waitUntilMissingText('1.jpeg')
                        ->pause(250)
                        ->waitForText('Drag and drop your files')
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
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
                        ->pause(250)
                        ->press('.filepond--action-remove-item')
                        ->waitUntilMissingText('1.jpeg')
                        ->pause(250)
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
                        ->pause(250)
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
                        ->pause(250)
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
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
                        ->pause(250)
                        ->press('.filepond--action-remove-item')
                        ->waitUntilMissingText('1.jpeg')
                        ->pause(250)
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
                        ->pause(250)
                        ->script("return document.querySelector('{$formattedFilepondSelector}').dispatchEvent(new CustomEvent('moveFile', { detail: [0, 2] }));");

                    $browser->pause(500)->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(2, $newMedia);

        $this->assertEquals('2.jpeg', $newMedia[0]->file_name);
        $this->assertEquals('1.jpeg', $newMedia[1]->file_name);
    }

    /** @test */
    public function it_can_add_and_delete_and_reorder_in_one_request()
    {
        $user = User::first();

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@photos', function (Browser $browser) {
                    $formattedFilepondSelector = $browser->resolver->format('@photos-file-input');

                    $browser->waitForText('1.jpeg')
                        ->waitForText('Drag and drop your files')
                        ->pause(250)
                        ->screenshot('Filpond-1-AddAndReorderMedia-BeforeRemoving')
                        ->press('.filepond--action-remove-item')
                        ->waitUntilMissingText('1.jpeg')
                        ->pause(250)
                        ->screenshot('Filpond-2-AddAndReorderMedia-BeforeAttaching')
                        ->attachToFilepond(__DIR__ . '/../small.jpeg');

                    $browser
                        ->screenshot('Filpond-3-AddAndReorderMedia-BeforeReordering')
                        ->script("return document.querySelector('{$formattedFilepondSelector}').dispatchEvent(new CustomEvent('moveFile', { detail: [0, 2] }));");

                    $browser
                        ->pause(500)
                        ->screenshot('Filpond-4-AddAndReorderMedia-BeforeSubmitting')
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('photos');

        $this->assertCount(2, $newMedia);

        $this->assertEquals('small.jpeg', $newMedia[0]->file_name);
        $this->assertEquals('2.jpeg', $newMedia[1]->file_name);
    }

    /** @test */
    public function it_can_also_reorder_with_direct_uploads()
    {
        $user = User::first();

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@documents', function (Browser $browser) {
                    $formattedFilepondSelector = $browser->resolver->format('@documents-file-input');

                    $browser->waitForText('dummy1.txt')
                        ->waitForText('Drag and drop your files')
                        ->pause(250)
                        ->screenshot('Filepond-1-BeforeRemovingFirstDummy')
                        ->press('.filepond--action-remove-item')
                        ->waitUntilMissingText('dummy1.txt')
                        ->pause(250)
                        ->screenshot('Filepond-2-BeforeAddingThirdDummy')
                        ->attachToFilepond(__DIR__ . '/../dummy3.txt')
                        ->pause(250)
                        ->screenshot('Filepond-3-BeforeOrderingDummies');

                    $browser->script("return document.querySelector('{$formattedFilepondSelector}').dispatchEvent(new CustomEvent('moveFile', { detail: [0, 2] }));");

                    $browser->pause(500)
                        ->screenshot('Filepond-4-BeforeHittingSubmit')
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('documents');

        $this->assertCount(2, $newMedia);

        $this->assertEquals('dummy3.txt', $newMedia[0]->file_name);
        $this->assertEquals('dummy2.txt', $newMedia[1]->file_name);
    }

    /** @test */
    public function it_can_add_a_file_from_a_external_link()
    {
        /** @var User $user */
        $user = User::first();

        $user->clearMediaCollection('avatar');

        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondExisting')
                ->within('@external', function (Browser $browser) {
                    $browser
                        ->waitForText('Drag and drop your files')
                        ->type('external_url', url('/storage/1.jpeg'))
                        ->press('Add from URL')
                        ->waitForText('Upload complete', 10);

                    $browser->pause(250)->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $newMedia = $user->fresh()->getMedia('avatar');

        $this->assertCount(1, $newMedia);
        $this->assertEquals('1.jpeg', $newMedia[0]->file_name);
    }
}
