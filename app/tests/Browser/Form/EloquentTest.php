<?php

namespace Tests\Browser\Form;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class EloquentTest extends DuskTestCase
{
    /** @test */
    public function it_omits_the_unused_eloquent_attributes_by_default()
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
}
