<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormbuilderTest extends DuskTestCase
{
    /** @test */
    public function it_can_generate_and_submit_a_simple_form_with_formbuilder()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/formbuilder/simple')
                ->waitForText('FormBuilder')
                ->assertInputPresent('inputText')
                ->assertInputPresent('inputPassword')
                ->assertInputPresent('inputTextarea')
                ->assertInputValue('inputText', 'Test value in input text field')
                ->assertSee('Test help 1')
                ->press('Submit')
                ->assertRouteIs('formbuilder.simple.store');
        });
    }

    /** @test */
    public function it_can_generate_and_submit_a_form_from_a_form_class_with_formbuilder()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/formbuilder/fromClass')
                ->waitForText('FormBuilder')
                ->assertInputPresent('hiddenInput1')
                ->assertInputPresent('inputText1')
                ->assertInputValue('hiddenInput1', 'Test value hidden input 1')
                ->assertSee('Test help 1')
                ->press('Send')
                ->assertRouteIs('formbuilder.fromClass.store')
                ->waitForText('The input text2 field is required.')
                ->assertSee('The input text2 field is required.');
        });
    }

    /** @test */
    public function it_can_generate_a_form_with_formbuilder_and_bind_data_from_a_model()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/formbuilder/modelBinding')
                ->waitForText('FormBuilder')
                ->assertInputPresent('publish_from')
                ->assertInputPresent('title')
                ->assertInputPresent('slug')
                ->assertInputPresent('body')
                ->assertInputPresent('tags')
                ->assertInputValue('publish_from', now()->format('Y-m-d') . ' 13:30')
                ->assertInputValue('title', 'Test post 1')
                ->assertInputValue('slug', 'test-post-1')
                ->assertInputValue('body', '<p>This is the posts body</b>')
                ->assertSelected('tags', 'laravel')
                ->assertSelected('tags', 'splade')
                ->press('Save')
                ->assertRouteIs('formbuilder.model.store');
        });
    }
}
