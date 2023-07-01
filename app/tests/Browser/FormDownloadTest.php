<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormDownloadTest extends DuskTestCase
{
    /** @test */
    public function it_can_download_a_file()
    {
        $this->browse(function (Browser $browser) {
            $this->configureDownloadPath($browser, __DIR__ . '/downloads');

            $browser->visit('/form/download')
                ->waitForText('FormDownload')
                ->type('name', 'Hello!')
                ->press('Download')
                ->waitUsing(null, 100, function () {
                    return file_exists(__DIR__ . '/downloads/test.pdf');
                });

            $this->assertFileEquals(
                __DIR__ . '/../../storage/test.pdf',
                __DIR__ . '/downloads/test.pdf'
            );
        });
    }

    /** @test */
    public function it_can_show_validation_errors_when_expecting_a_file_download()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/download')
                ->waitForText('FormDownload')
                ->press('Download')
                ->waitForText('The name field is required.');
        });
    }

    /** @test */
    public function it_can_show_server_errors_when_expecting_a_file_download()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/download')
                ->waitForText('FormDownload')
                ->type('name', 'error')
                ->press('Download')
                ->waitFor('iframe')
                ->withinFrame('iframe', function (Browser $browser) {
                    $browser->assertSee('SERVER ERROR');
                });
        });
    }
}
