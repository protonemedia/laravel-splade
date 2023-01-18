<?php

namespace Tests\Unit;

use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Mockery;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\SpladeCore;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tests\TestCase;
use Throwable;

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

    /** @test */
    public function it_can_use_a_custom_exception_hanlder()
    {
        $exceptionHandler = Mockery::mock(Handler::class);

        $callable = SpladeCore::exceptionHandler($exceptionHandler, function (Throwable $e, Request $request) {
            if ($e instanceof HttpException && $e->getStatusCode() === 419) {
                return new RedirectResponse('/login/custom');
            }
        });

        $response = $callable(new HttpException(400), request());

        $this->assertNull($response);

        $response = $callable(new HttpException(419), request());

        $this->assertNotNull($response);
        $this->assertInstanceOf(RedirectResponse::class, $response);
        $this->assertEquals('/login/custom', $response->getTargetUrl());
    }
}
