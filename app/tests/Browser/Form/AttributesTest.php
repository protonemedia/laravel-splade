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
}
