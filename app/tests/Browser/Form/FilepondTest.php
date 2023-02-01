<?php

namespace Tests\Browser\Form;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;
use Tests\Browser;
use Tests\DuskTestCase;

class FilepondTest extends DuskTestCase
{
    public function setUp(): void
    {
        parent::setUp();

        (new Filesystem)->cleanDirectory(storage_path('app/avatars'));
        (new Filesystem)->cleanDirectory(storage_path('splade-temporary-file-uploads'));
    }

    public function tearDown(): void
    {
        (new Filesystem)->cleanDirectory(storage_path('app/avatars'));
        (new Filesystem)->cleanDirectory(storage_path('splade-temporary-file-uploads'));

        parent::tearDown();
    }

    /** @test */
    public function it_can_upload_a_file_using_a_regular_single_request()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@regular-avatar', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_multiple_files_using_a_regular_single_request()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@regular-avatars', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->attachToFilepond(__DIR__ . '/../small.png')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar0.jpg'));
            $this->assertFileExists(storage_path('app/avatars/avatar1.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_controller_middleware()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@single-avatar', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
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
                ->within('@multiple-avatars', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser
                        ->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->attachToFilepond(__DIR__ . '/../small.png')
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
                ->within('@route-middleware', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
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
                ->within('@form-request', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_a_form_request_that_has_a_validation_rule_object()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@form-request-rule-object', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_upload_a_temporary_file_using_a_form_request_and_it_clear_the_converted_files()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@form-request-rule-object-with-title', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->attachToFilepond(__DIR__ . '/../small.jpeg')
                        ->type('title', Str::random())
                        ->press('Submit');
                })
                ->waitForRoute('navigation.one');

            $this->assertFileExists(storage_path('app/avatars/avatar.jpg'));
        });
    }

    /** @test */
    public function it_can_use_a_custom_js_config()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@js-config', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->assertDontSee('Powered by PQINA');
                });
        });
    }

    /** @test */
    public function it_can_use_a_custom_php_config()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepond')
                ->within('@php-config', function (Browser $browser) {
                    $browser->waitForText('Drag and drop your files')->pause(500);

                    $browser->assertDontSee('Powered by PQINA');
                });
        });
    }
}
