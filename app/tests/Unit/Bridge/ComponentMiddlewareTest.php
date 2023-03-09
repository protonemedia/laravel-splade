<?php

namespace Tests\Unit\Bridge;

use ProtoneMedia\Splade\Bridge\ComponentMiddleware;
use ProtoneMedia\Splade\FileUploads\HandleSpladeFileUploads;
use Tests\TestCase;

class ComponentMiddlewareTest extends TestCase
{
    /** @test */
    public function it_resolves_the_route_middleware()
    {
        $service = new ComponentMiddleware;

        $middleware = $service->resolveApplicableMiddleware(
            route('form.components.filepond.storeWithRouteMiddleware'), 'POST'
        );

        $this->assertCount(1, $middleware);
        $this->assertEquals(HandleSpladeFileUploads::class . ':avatar', $middleware[0]);
    }
}
