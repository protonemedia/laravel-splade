<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class FormBuilderTest extends DuskTestCase
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
                ->type('inputPassword', 'passw0rd')
                ->type('inputTextarea', 'Splade Formbuilder test')
                ->press('Submit')
                ->waitForText('Results:');

            $expected_results = [
                'inputText'     => 'Test value in input text field',
                'inputPassword' => 'passw0rd',
                'inputTextarea' => 'Splade Formbuilder test',
            ];

            foreach ($expected_results as $field => $result) {
                $browser->assertSee('"' . $field . '": "' . $result . '"');
            }
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
                ->waitForText('The input text2 field is required.')
                ->assertDontSee('Results:')
                ->assertSee('The input password2 field is required.')
                ->type('inputText2', 'Lorem Ipsum')
                ->type('inputPassword2', 'Lorem-Ipsum')
                ->press('Send')
                ->waitForText('Results:');

            $expected_results = [
                'hiddenInput1'                 => 'Test value hidden input 1',
                'hiddenInput2'                 => 'Test value hidden input 2',
                'inputText1'                   => 'Test value input text field 1',
                'disabledTextField'            => 'This field is disabled',
                'readonlyTextField'            => 'This field is readonly',
                'disabledAndReadonlyTextField' => 'This field is disabled and readonly',
                'colorInput'                   => '#cccccc',
                'inputText2'                   => 'Lorem Ipsum',
                'inputPassword2'               => 'Lorem-Ipsum',
            ];

            foreach ($expected_results as $field => $result) {
                $browser->assertSee('"' . $field . '": "' . $result . '"');
            }
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
                ->assertInputValue('publish_from', now()->format('Y-m-d H:i'))
                ->assertInputValue('title', 'Test post 1')
                ->assertInputValue('slug', 'test-post-1')
                ->assertInputValue('body', '<p>This is the posts body</p>')
                ->assertSelected('tags', 'laravel')
                ->assertSelected('tags', 'splade')
                ->press('Save')
                ->waitForText('Results:');

            $expected_results = [
                'title' => 'Test post 1',
                'slug'  => 'test-post-1',
                'body'  => '<p>This is the posts body</p>',
            ];

            foreach ($expected_results as $field => $result) {
                $browser->assertSee('"' . $field . '": "' . $result . '"');
            }
        });
    }

    /** @test */
    public function it_can_generate_multiple_forms_on_one_page()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/formbuilder/multifields')
                ->waitForText('FormBuilder')
                ->assertInputPresent('additional_field')
                ->type('additional_field', 'Test value in additional field')
                ->press('#multiform1 .submit-btn')
                ->waitForText('Results:')
                ->assertDontSee('additional_field')
                ->press('#multiform2 .submit-btn')
                ->waitForText('Results:')
                ->assertSee('"additional_field": "Test value in additional field"');
        });
    }

    /** @test */
    public function it_can_show_a_jodit_wysiwyg_editor()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/formbuilder/wysiwyg')
                ->waitForText('Jodit Wysiwyg editor')
                ->assertInputPresent('body')
                ->assertSee('This is a test with the Splade Jodit WYSIWYG editor.')
                ->assertDontSee('This is a <u>test</u> with the <b>Splade</b> <em>Jodit WYSIWYG editor</em>.')
                ->press('Submit')
                ->waitForText('Results:')
                ->assertSee('"body": "This is a <u>test</u> with the <b>Splade</b> <em>Jodit WYSIWYG editor</em>.');
        });
    }
}
