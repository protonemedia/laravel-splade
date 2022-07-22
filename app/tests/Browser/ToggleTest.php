<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ToggleTest extends DuskTestCase
{
    /** @test */
    public function it_can_have_a_default_value()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toggle/default')
                ->waitForText('ToggleDefault')
                ->assertSee('IsToggled')
                ->assertDontSee('IsNotToggled');
        });
    }

    /** @test */
    public function it_can_have_a_multiple_default_values()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toggle/multipleDefaults')
                ->waitForText('ToggleMultipleDefaults')
                ->assertSee('IsToggledOne')
                ->assertDontSee('IsNotToggledOne')
                ->assertSee('IsNotToggledTwo')
                ->assertDontSee('IsToggledTwo');
        });
    }

    /** @test */
    public function it_can_toggle_a_single_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toggle/single')
                ->waitForText('ToggleSingle')
                ->assertSee('IsNotToggled')
                ->press('@toggle')
                ->waitUntilMissing('IsNotToggled')
                ->assertSee('IsToggled')
                ->press('@toggle-off')
                ->waitUntilMissing('IsToggled')
                ->assertSee('IsNotToggled')
                ->press('@toggle-on')
                ->waitUntilMissing('IsNotToggled')
                ->assertSee('IsToggled');
        });
    }

    /** @test */
    public function it_can_toggle_a_multiple_element()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/toggle/multiple')
                ->waitForText('ToggleMultiple')
                ->assertSee('IsNotToggledOne')
                ->assertSee('IsNotToggledTwo')

                ->press('@toggle-one')
                ->waitUntilMissing('IsNotToggledOne')
                ->assertSee('IsToggledOne')
                ->assertSee('IsNotToggledTwo')
                ->press('@toggle-one-off')
                ->waitUntilMissing('IsToggledOne')
                ->assertSee('IsNotToggledOne')
                ->assertSee('IsNotToggledTwo')
                ->press('@toggle-one-on')
                ->waitUntilMissing('IsNotToggledOne')
                ->assertSee('IsToggledOne')
                ->assertSee('IsNotToggledTwo')
                ->press('@toggle-one-off') // reset

                ->press('@toggle-two')
                ->waitUntilMissing('IsNotToggledTwo')
                ->assertSee('IsNotToggledOne')
                ->assertSee('IsToggledTwo')
                ->press('@toggle-two-off')
                ->waitUntilMissing('IsToggledTwo')
                ->assertSee('IsNotToggledOne')
                ->assertSee('IsNotToggledTwo')
                ->press('@toggle-two-on')
                ->waitUntilMissing('IsNotToggledTwo')
                ->assertSee('IsNotToggledOne')
                ->assertSee('IsToggledTwo');
        });
    }
}
