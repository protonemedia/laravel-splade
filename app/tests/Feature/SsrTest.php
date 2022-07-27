<?php

namespace Tests\Feature;

use ProtoneMedia\Splade\Http\SpladeMiddleware;
use ProtoneMedia\Splade\Ssr;
use Tests\TestCase;

class SsrTest extends TestCase
{
    /** @test */
    public function it_has_a_server_that_handles_ssr_requests()
    {
        if (!config('splade.ssr.enabled')) {
            return $this->markTestSkipped('SSR not enabled');
        }

        $data = (new Ssr)->render(
            components:  SpladeMiddleware::renderedComponents(),
            html:        view('form.default')->render(),
            splade:      (object) [],
        );

        $this->assertArrayHasKey('body', $data);

        // evaluated form
        $this->assertStringContainsString('<form><input dusk="name" value="Splade"></form>', $data['body']);

        // rendered components
        $this->assertStringContainsString('grid grid-cols-3 grid-flow-row-3', $data['body']);
    }
}
