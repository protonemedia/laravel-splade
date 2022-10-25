<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ContentTest extends DuskTestCase
{
    /** @test */
    public function it_can_render_rendered_html()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/content')
                ->waitForText('Introducing Splade')
                ->assertSee('Home')
                ->assertSee('Contact')
                ->assertPresent('article.prose');
        });
    }
}
