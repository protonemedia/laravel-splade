<?php

namespace Tests\Unit;

use Illuminate\Http\JsonResponse;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\SpladeCore;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Tests\TestCase;

class SpladeCoreTest extends TestCase
{
    /** @test */
    public function it_generates_a_regular_redirect_on_non_splade_requests()
    {
        $redirect = Splade::redirectAway('https://splade.dev');

        $this->assertInstanceOf(RedirectResponse::class, $redirect);
        $this->assertEquals('https://splade.dev', $redirect->getTargetUrl());
    }

    /** @test */
    public function it_can_generate_a_409_response_with_a_target_url()
    {
        request()->headers->set(SpladeCore::HEADER_SPLADE, true);

        $redirect = Splade::redirectAway('https://splade.dev');

        $this->assertInstanceOf(JsonResponse::class, $redirect);
        $this->assertEquals(409, $redirect->status());
        $this->assertEquals('https://splade.dev', $redirect->headers->get(SpladeCore::HEADER_REDIRECT_AWAY));
    }
}
