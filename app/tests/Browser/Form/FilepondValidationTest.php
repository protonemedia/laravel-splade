<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FilepondValidationTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_file_type()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('accept', __DIR__ . '/../dummy.txt')
                ->waitForText('File is of invalid type')
                ->assertSee('File is of invalid type');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_minimum_size()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('min-size', __DIR__ . '/../dummy.txt')
                ->waitForText('File is too small')
                ->assertSee('File is too small');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_maximum_size()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('max-size', __DIR__ . '/../small.jpeg')
                ->waitForText('File is too large')
                ->assertSee('File is too large');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_exact_image_size()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('exact-dimension', __DIR__ . '/../small.jpeg')
                ->waitForText('Image is too small')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('exact-dimension', __DIR__ . '/../large.jpeg')
                ->waitForText('Image is too big')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('exact-dimension', __DIR__ . '/../medium.jpeg')
                ->waitForText('2 KB')
                ->assertDontSee('Image is too small')
                ->assertDontSee('Image is too big');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_minimum_image_size()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('min-image', __DIR__ . '/../small.jpeg')
                ->waitForText('Image is too small')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('min-image', __DIR__ . '/../medium.jpeg')
                ->waitForText('2 KB')
                ->assertDontSee('Image is too small');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_maximum_image_size()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('max-image', __DIR__ . '/../large.jpeg')
                ->waitForText('Image is too big')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('max-image', __DIR__ . '/../medium.jpeg')
                ->waitForText('2 KB')
                ->assertDontSee('Image is too big');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_minimum_resolution()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('min-resolution', __DIR__ . '/../small.jpeg')
                ->waitForText('Resolution is too low')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('min-resolution', __DIR__ . '/../medium.jpeg')
                ->waitForText('2 KB')
                ->assertDontSee('Resolution is too low');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_validate_the_maximum_resolution()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('max-resolution', __DIR__ . '/../large.jpeg')
                ->waitForText('Resolution is too high')

                ->visit('form/components/filepondValidation')
                ->waitForText('Drag and drop your files')
                ->pause(500)
                ->attach('max-resolution', __DIR__ . '/../medium.jpeg')
                ->waitForText('2 KB')
                ->assertDontSee('Resolution is too high');
        });
    }
}
