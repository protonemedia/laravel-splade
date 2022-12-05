<?php

namespace Tests\Browser\Form;

use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Laravel\Dusk\Browser;
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
                        ->attach('avatar', __DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete')
                        ->press('Submit');
                })
                ->waitForText('The photos have been saved');
        });

        $this->assertFalse($user->fresh()->getFirstMedia('avatar')->is($media));
    }
}
