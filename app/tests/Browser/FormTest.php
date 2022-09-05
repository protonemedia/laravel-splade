<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormTest extends DuskTestCase
{
    /** @test */
    public function it_can_show_the_errors()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/simple')
                ->waitForText('FormSimple')
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSee('The name field is required.');
        });
    }

    /** @test */
    public function it_can_upload_a_file()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/file')
                ->waitForText('FormFile')
                ->attach('@avatar', __DIR__ . '/small.jpeg')
                ->press('Submit')
                ->waitForText('The avatar has invalid image dimensions.')
                ->assertSee('The avatar has invalid image dimensions.');
        });
    }

    /** @test */
    public function it_can_restore_the_form_after_submit()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/restore')
                ->waitForText('FormRestore')
                ->assertValue('@name', 'Pascal')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('Success!')
                ->assertValue('@name', 'Pascal');
        });
    }

    /** @test */
    public function it_can_reset_the_form_after_submit()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/reset')
                ->waitForText('FormReset')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('Success!')
                ->assertValue('@name', '');
        });
    }

    /** @test */
    public function it_can_ask_to_confirm_the_submit()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/confirm')
                ->waitForText('FormConfirm')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-cancel')
                ->waitUntilMissingText('Are you sure you want to continue?')
                ->assertInputValue('@name', 'Splade')
                ->press('Submit')
                ->waitForText('Are you sure you want to continue?')
                ->press('@splade-confirm-confirm')
                ->waitForText('FormSimple'); // redirect
        });
    }

    /** @test */
    public function it_can_ask_to_confirm_the_submit_with_custom_texts()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/customConfirm')
                ->waitForText('FormCustomConfirm')
                ->press('Submit')
                ->waitForText('Custom title')
                ->assertSee('Custom text')
                ->assertSeeIn('@splade-confirm-confirm', 'Yes')
                ->assertSeeIn('@splade-confirm-cancel', 'No');
        });
    }

    /** @test */
    public function it_can_have_a_default_js_object_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/default')
                ->waitForText('FormDefault')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_eloquent_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/eloquent')
                ->waitForText('FormEloquent')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_array_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/array')
                ->waitForText('FormArray')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_arrayable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/arrayable')
                ->waitForText('FormArrayable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_json_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/json')
                ->waitForText('FormJson')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_jsonable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/jsonable')
                ->waitForText('FormJsonable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_have_a_default_json_serializable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/jsonSerializable')
                ->waitForText('FormJsonSerializable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    /** @test */
    public function it_can_show_the_forms_state_and_a_progress_bar()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/processing')
                ->waitForText('FormProcessing')
                ->press('Submit')
                ->waitForText('Form is processing')
                ->pause(250)
                ->assertPresent('#nprogress')
                ->waitUntilMissing('Form is processing')
                ->waitForText('Form was successful')
                ->assertSee('Form recently successful')
                ->assertMissing('#nprogress')
                ->waitUntilMissing('Form recently successful')
                ->assertSee('Form was successful');
        });
    }

    /** @test */
    public function it_renders_classes_on_the_form_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/simple')
                ->waitForText('FormSimple')
                ->assertAttribute('fieldset', 'class', 'form-simple');
        });
    }
}
