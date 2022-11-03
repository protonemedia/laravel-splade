<?php

namespace Tests\Browser\Form;

use Illuminate\Filesystem\Filesystem;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FilepondTest extends DuskTestCase
{
    public function setUp(): void
    {
        parent::setUp();

        (new Filesystem)->cleanDirectory(storage_path('app/avatars'));
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_controller_middleware()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->waitForText('FormFilePond')
                ->within('@single-avatar', function (Browser $browser) {
                    $browser->attach('avatar', __DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_multiple_temporary_files()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->waitForText('FormFilePond')
                ->within('@multiple-avatars', function (Browser $browser) {
                    $browser
                        ->attach('avatars', __DIR__ . '/../small.jpeg')
                        ->attach('avatars', __DIR__ . '/../small.png')
                        ->waitForText('Uploading')
                        ->waitUntilMissingText('Uploading')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar0.jpg'));
            $this->assertFileExists(storage_path('app/avatars/avatar1.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_route_middleware()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->waitForText('FormFilePond')
                ->within('@route-middleware', function (Browser $browser) {
                    $browser->attach('avatar', __DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_a_form_request()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->waitForText('FormFilePond')
                ->within('@form-request', function (Browser $browser) {
                    $browser->attach('avatar', __DIR__ . '/../small.jpeg')
                        ->waitForText('Upload complete')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }
}
