<?php

namespace Tests\Feature;

use Tests\TestCase;

class HeadTest extends TestCase
{
    /** @test */
    public function it_renders_the_head()
    {
        $this->get('/navigation/one')
            ->assertSee('<title>Navigation One</title>', false)
            ->assertSee('<meta name="description" content="First Navigation" />', false)
            ->assertSee('<meta name="keywords" content="een, one" />', false);
    }
}
