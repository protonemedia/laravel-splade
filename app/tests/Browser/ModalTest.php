<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ModalTest extends DuskTestCase
{
    /** @test */
    public function it_can_show_a_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->click('@one')
                ->waitForText('ModalComponentOne')
                ->pause(500)
                ->screenshot('ModalComponentOne')
                ->click('@close-one')
                ->waitUntilMissingText('ModalComponentOne')
                ->pause(500)
                ->screenshot('ModalComponentOneClosed');

            $this->assertScreenshotSnapshot([
                'ModalComponentOne',
                'ModalComponentOneClosed',
            ]);
        });
    }

    /** @test */
    public function it_can_require_the_modal_to_be_explicitly_closed()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->click('@one-close-explicitly')
                ->waitForText('ModalComponentOne')
                ->pause(500)
                ->keys('', ['{escape}'])
                ->pause(500)
                ->assertSee('ModalComponentOne')
                ->click('@close-one')
                ->waitUntilMissingText('ModalComponentOne');
        });
    }

    /** @test */
    public function it_can_do_nested_modals()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@one')
                ->waitForText('ModalComponentOne')
                ->pause(250)
                ->click('@two')
                ->waitForText('ModalComponentTwo')
                ->pause(500)
                ->screenshot('ModalComponentTwo')
                ->pause(250)
                ->click('@close-two')
                ->waitUntilMissingText('ModalComponentTwo')
                ->pause(500)
                ->screenshot('ModalComponentTwoClosed');

            $this->assertScreenshotSnapshot([
                'ModalComponentTwo',
                'ModalComponentTwoClosed',
            ]);
        });
    }

    /** @test */
    public function it_can_show_a_slideover()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@slideover')
                ->waitForText('ModalComponentSlideover')
                ->pause(500)
                ->screenshot('ModalComponentSlideover')
                ->click('@close-slideover')
                ->waitUntilMissingText('ModalComponentSlideover')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverClosed');

            $this->assertScreenshotSnapshot([
                'ModalComponentSlideover',
                'ModalComponentSlideoverClosed',
            ]);
        });
    }

    /** @test */
    public function it_can_show_a_slideover_on_the_left_side()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@slideover-left')
                ->waitForText('ModalComponentSlideover')
                ->pause(500)
                ->screenshot('ModalComponentSlideover')
                ->click('@close-slideover')
                ->waitUntilMissingText('ModalComponentSlideover')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverClosed');

            $this->assertScreenshotSnapshot([
                'ModalComponentSlideover',
                'ModalComponentSlideoverClosed',
            ]);
        });
    }

    /** @test */
    public function it_can_do_nested_slideover()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->click('@slideover')
                ->waitForText('ModalComponentSlideover')
                ->pause(500)
                ->click('@one-from-slideover')
                ->waitForText('ModalComponentOne')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverWithOne')
                ->click('@two')
                ->waitForText('ModalComponentTwo')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverWithOneWithTwo')
                ->click('@close-two')
                ->waitUntilMissingText('ModalComponentTwo')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverTwoClosed')
                ->click('@close-one')
                ->waitUntilMissingText('ModalComponentOne')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverOneClosed')
                ->click('@close-slideover')
                ->waitUntilMissingText('ModalComponentSlideover')
                ->pause(500)
                ->screenshot('ModalComponentSlideoverClosed');

            $this->assertScreenshotSnapshot([
                'ModalComponentSlideoverWithOne',
                'ModalComponentSlideoverWithOneWithTwo',
                'ModalComponentSlideoverTwoClosed',
                'ModalComponentSlideoverOneClosed',
                'ModalComponentSlideoverClosed',
            ]);
        });
    }

    /** @test */
    public function it_shows_the_form_validation_inside_the_modal()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@validation')
                ->waitForText('ModalComponentValidation')
                ->pause(500)
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSeeIn('@modal.1', 'The name field is required.');
        });
    }

    /** @test */
    public function it_can_keep_the_modal_opened_after_submit()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@keep')
                ->waitForText('ModalComponentKeep')
                ->pause(500)
                ->type('@name', 'Test')
                ->press('Submit')
                ->waitForText('From Query String: Test');
        });
    }

    /** @test */
    public function it_can_optionally_hide_the_close_button()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->resize(1024, 768)
                ->waitForText('ModalComponent')
                ->click('@one')
                ->waitForText('ModalComponentOne')
                ->within('@modal.1', function (Browser $browser) {
                    $browser->assertPresent('@close-modal-button');
                })
                ->click('@two')
                ->waitForText('ModalComponentTwo')
                ->within('@modal.2', function (Browser $browser) {
                    $browser->assertMissing('@close-modal-button');
                })
                ->click('@close-two')
                ->waitUntilMissingText('ModalComponentTwo')
                ->click('@close-modal-button')
                ->waitUntilMissingText('ModalComponentOne');
        });
    }

    /**
     * @test
     *
     * @dataProvider sizeAndPixels
     */
    public function it_can_have_a_modal_with_different_max_widths($size, $expectedWidth)
    {
        $this->browse(function (Browser $browser) use ($size, $expectedWidth) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->pause(250)
                ->click('@modal-size-' . $size)
                ->waitForText('ModalSize ' . $size);

            $width = $browser->script("return document.querySelector('body [dusk=\"modal-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals($expectedWidth, $width);
        });
    }

    /**
     * @test
     *
     * @dataProvider sizeAndPixels
     */
    public function it_can_have_a_slideover_with_different_max_widths($size, $expectedWidth)
    {
        $this->browse(function (Browser $browser) use ($size, $expectedWidth) {
            $browser->visit('/modal/base')
                ->resize(1680, 900)
                ->waitForText('ModalComponent')
                ->click('@slideover-size-' . $size)
                ->waitForText('ModalSize ' . $size);

            $width = $browser->script("return document.querySelector('body [dusk=\"slideover-dialog\"]').offsetWidth")[0] ?? null;

            $this->assertEquals($expectedWidth, $width);
        });
    }

    public function sizeAndPixels()
    {
        return [
            ['sm', 384],
            ['md', 448],
            ['lg', 512],
            ['xl', 576],
            ['2xl', 672],
            ['3xl', 768],
            ['4xl', 896],
            ['5xl', 1024],
            ['6xl', 1152],
            ['7xl', 1280],
        ];
    }
}
