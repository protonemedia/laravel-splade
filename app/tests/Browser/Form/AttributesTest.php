<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class AttributesTest extends DuskTestCase
{
    /** @test */
    public function it_guards_the_unused_eloquent_attributes_by_default()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/eloquent')
                ->waitForText('FormComponents')
                ->assertInputValue('input', 'input')
                ->assertInputValue('json[key]', 'key')
                ->assertInputValue('textarea', 'textarea')
                ->assertSelected('select', 'b')
                ->assertChecked('checkbox')
                ->assertRadioSelected('radio', 'b')
                ->assertSeeIn('@all', '"json": { "key": "key" }')
                ->assertDontSeeIn('@all', 'secret');
        });
    }

    /** @test */
    public function it_guards_the_unused_fluent_attributes_by_default()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/fluent')
                ->waitForText('FormComponents')
                ->assertInputValue('input', 'input')
                ->assertInputValue('json[key]', 'key')
                ->assertInputValue('textarea', 'textarea')
                ->assertSelected('select', 'b')
                ->assertChecked('checkbox')
                ->assertRadioSelected('radio', 'b')
                ->assertSeeIn('@all', '"json": { "key": "key" }')
                ->assertDontSeeIn('@all', 'secret');
        });
    }

    /** @test */
    public function it_can_unguard_by_attribute()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/unguarded')
                ->waitForText('FormComponents')
                ->assertSeeIn('@all', 'secret');
        });
    }

    /** @test */
    public function it_can_unguard_by_default()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaultUnguarded')
                ->waitForText('FormComponents')
                ->assertSeeIn('@all', 'secret');
        });
    }

    /** @test */
    public function it_fills_undefined_attributes_from_default_json_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaultJson')
                ->waitForText('FormComponents')
                ->assertSeeIn('#all', '{ "name": "Test", "email": "", "description": {}, "agree": false, "options": [], "theme": "" }');
        });
    }

    /** @test */
    public function it_fills_undefined_attributes_from_default_php_data()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/defaultPhp')
                ->waitForText('FormComponents')
                ->assertSeeIn('#all', '{ "name": "Test", "email": "", "description": {}, "agree": false, "options": [], "theme": "" }');
        });
    }

    /** @test */
    public function it_handles_nested_numeric_keys()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/arrays')
                ->waitForText('FormComponents')
                ->assertInputValue('nested.key', 'value')
                ->assertInputValue('nested[another]', 'key')
                ->assertInputValue('list[1]', 'one')
                ->assertInputValue('list[2]', 'two')
                ->assertInputValue('list[3]', 'three')
                ->assertInputValue('another.1', 'one')
                ->assertInputValue('another.2', 'two')
                ->assertInputValue('another.3', 'three')
                ->assertSeeIn('#all', '{ "options": [], "nested": { "key": "value", "another": "key" }, "list": { "1": "one", "2": "two", "3": "three" }, "another": { "1": "one", "2": "two", "3": "three" } }');
        });
    }
}
