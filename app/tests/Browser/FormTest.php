<?php

namespace Tests\Browser;

use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormTest extends DuskTestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_show_the_errors_from_a_redirect()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/redirect')
                ->waitForText('FormRedirect')
                ->press('Submit')
                ->waitForText('Custom validation message from redirect')
                ->assertSee('Custom validation message from redirect');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_submit_data_to_a_get_endpoint()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/get')
                ->waitForText('FormGet')
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSee('The name field is required.')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('FormSimple'); // redirect
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_submit_to_a_non_post_endpoint()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/put')
                ->waitForText('FormPut')
                ->press('Submit')
                ->waitForText('The name field is required.')
                ->assertSee('The name field is required.');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_ask_to_confirm_the_submit_with_a_danger_button()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/confirmDanger')
                ->waitForText('FormConfirmDanger')
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

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_ask_to_confirm_the_submit_with_a_password()
    {
        $this->browse(function (Browser $browser) {
            $browser->logout()
                ->visit('/form/passwordConfirm')
                ->waitForText('FormPasswordConfirm')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('Please confirm your password before continuing')
                ->press('@splade-confirm-confirm')
                ->waitForText('No user is logged in');

            $browser->loginAs(User::firstOrFail())
                ->visit('/form/passwordConfirm')
                ->waitForText('FormPasswordConfirm')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->type('password', 'password')
                ->press('@splade-confirm-confirm')
                ->waitForText('FormSimple')

                // go back to check that we need to reconfirm
                ->visit('/form/passwordConfirm')
                ->waitForText('FormPasswordConfirm')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->type('password', 'password')
                ->press('@splade-confirm-confirm')
                ->waitForText('FormSimple');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_check_the_password_confirmation_status()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::firstOrFail())
                ->visit('/form/passwordConfirmOnce')
                ->waitForText('FormPasswordConfirmOnce')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForInput('password')
                ->type('password', 'password')
                ->press('@splade-confirm-confirm')
                ->waitForText('FormSimple')

                // go back to check that we don't need to reconfirm
                ->visit('/form/passwordConfirmOnce')
                ->waitForText('FormPasswordConfirmOnce')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->waitForText('FormSimple');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_confirm_and_execute_a_callback_without_submitting()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::firstOrFail())
                ->visit('/form/dummyRequest')
                ->waitForText('FormDummyRequest')
                ->type('@name', 'Splade')
                ->press('Submit')
                ->type('password', 'password')
                ->press('@splade-confirm-confirm')
                ->waitForTextIn('@data-name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_js_object_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/default')
                ->waitForText('FormDefault')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_eloquent_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/eloquent')
                ->waitForText('FormEloquent')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_array_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/array')
                ->waitForText('FormArray')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_arrayable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/arrayable')
                ->waitForText('FormArrayable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_json_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/json')
                ->waitForText('FormJson')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_jsonable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/jsonable')
                ->waitForText('FormJsonable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_have_a_default_json_serializable_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/jsonSerializable')
                ->waitForText('FormJsonSerializable')
                ->assertInputValue('@name', 'Splade');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_nested_values()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/nested')
                ->waitForText('FormNested')
                ->assertInputValue('@name', 'Splade')
                ->check('@accepted')
                ->press('Submit')
                ->waitUntilMissingText('FormNested')
                ->waitForRoute('navigation.one');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
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

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_renders_classes_on_the_form_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/simple')
                ->waitForText('FormSimple')
                ->assertAttribute('fieldset', 'class', 'form-simple');
        });
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_submit_to_a_route_that_returns_a_view_instead_of_a_redirect()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/form/view')
                ->waitForText('FormView')
                ->press('Submit')
                ->waitForText('NavigationOne')
                ->assertPathIs('/form/view');
        });
    }
}
