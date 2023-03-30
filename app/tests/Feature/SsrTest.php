<?php

namespace Tests\Feature;

use ProtoneMedia\Splade\Http\SpladeMiddleware;
use ProtoneMedia\Splade\Http\SpladeResponseData;
use ProtoneMedia\Splade\SpladeCore;
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
            components: SpladeMiddleware::renderedComponents(),
            html: view('form.default')->render(),
            dynamics: [],
            splade: SpladeResponseData::make(),
        );

        $this->assertArrayHasKey('body', $data);

        // evaluated form
        $this->assertStringContainsString('<fieldset><input dusk="name" value="Splade"></fieldset></form>', $data['body'] ?? '');

        // rendered components
        $this->assertStringContainsString('grid grid-cols-3 grid-flow-row-3', $data['body'] ?? '');
    }

    /** @test */
    public function it_has_a_server_that_handles_ssr_requests_and_dynamic_content()
    {
        if (!config('splade.ssr.enabled')) {
            return $this->markTestSkipped('SSR not enabled');
        }

        [$content, $dynamics] = SpladeMiddleware::extractDynamicsFromContent(
            view('navigation.videoOne')->render()
        );

        $ssr = new Ssr;

        $content = (new SpladeMiddleware(app(SpladeCore::class), $ssr))->wrapContentInDataStores($content);

        $data = $ssr->render(
            components: SpladeMiddleware::renderedComponents(),
            html: $content,
            dynamics: $dynamics,
            splade: SpladeResponseData::make(),
        );

        $this->assertArrayHasKey('body', $data);
        $this->assertIsString($data['body']);

        $body = $data['body'];

        // evaluated layout + dynamic content
        $this->assertStringContainsString('Title for Chapter 1</h1>', $body);   // wrapped in H1
        $this->assertStringContainsString('</h1>Subtitle for Chapter 1', $body);    // not wrapped in element
        $this->assertStringContainsString('Persistent Video</h3>', $body);  // fixed content
        $this->assertStringContainsString('<h2>Chapter one</h2>', $body);   // from prose
        $this->assertStringContainsString('<h6>Helptext</h6>', $body);   // nested component

        // rendered components
        $this->assertStringContainsString('grid grid-cols-3 grid-flow-row-3', $data['body'] ?? '');
    }
}
