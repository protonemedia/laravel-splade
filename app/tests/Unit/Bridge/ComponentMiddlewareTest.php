<?php

namespace Tests\Unit\Bridge;

use App\Models\Project;
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

    /** @test */
    public function it_substitutes_the_original_bindings()
    {
        $service = new ComponentMiddleware;

        $request = $service->makeRequestFromUrlAndMethod(config('splade.with_vue_bridge_route'), 'POST');

        $service->applyOriginalRouteParameters(
            route('form.components.filepond.storeWithFormRequestRuleObjectWithTitle', Project::first()), 'POST', $request
        );

        $this->assertCount(1, $request->route()->parameters());
        $this->assertInstanceOf(Project::class, $request->route()->parameters()['project'] ?? null);
    }
}
