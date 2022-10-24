<?php

namespace Tests\Browser;

use Tests\Browser;
use Tests\DuskTestCase;

class HeadTest extends DuskTestCase
{
    /** @test */
    public function it_updates_the_title_and_meta_and_link_tags()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/navigation/one')
                ->waitForText('NavigationOne')
                ->assertTitle('Navigation One')
                ->assertMetaByName('description', 'First Navigation')
                ->assertMetaByName('keywords', 'een, one')
                ->assertLinkCanonical(route('navigation.one'))
                ->click('@two')
                ->waitForText('NavigationTwo')
                ->assertTitle('Navigation Two')
                ->assertMetaByName('description', 'Second Navigation')
                ->assertMetaByName('keywords', 'twee, two')
                ->assertLinkCanonical(route('navigation.two'))
                ->click('@three')
                ->waitForText('NavigationThree')

                // defaults:
                ->assertTitle('Laravel Splade')
                ->assertMetaByName('description', 'Splade provides a super easy way to build Single Page Applications (SPA) using standard Laravel Blade templates, enhanced with renderless Vue 3 components.')
                ->assertMetaByName('keywords', 'Laravel, Splade');
        });
    }

    /** @test */
    public function it_updates_the_head_when_modals_are_opened_and_closed()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/modal/base')
                ->waitForText('ModalComponent')
                ->assertTitle('Modal Base')
                ->click('@one')
                ->waitForText('ModalComponentOne')
                ->pause(500)
                ->assertTitle('Modal One')
                ->click('@two')
                ->waitForText('ModalComponentTwo')
                ->pause(500)
                ->assertTitle('Modal Two')
                ->click('@close-two')
                ->waitForText('ModalComponentOne')
                ->pause(500)
                ->assertTitle('Modal One')
                ->click('@close-one')
                ->pause(500)
                ->assertTitle('Modal Base');
        });
    }
}
