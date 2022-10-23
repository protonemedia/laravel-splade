<?php

namespace Tests\Unit;

use ProtoneMedia\Splade\Http\SpladeMiddleware;
use Tests\TestCase;

class SpladeMiddlewareTest extends TestCase
{
    /** @test */
    public function it_can_format_a_url_into_a_host_and_port_with_defaults()
    {
        $this->assertEquals('splade.dev:80', SpladeMiddleware::urlToHostAndPort('http://splade.dev'));
        $this->assertEquals('splade.dev:443', SpladeMiddleware::urlToHostAndPort('https://splade.dev'));
        $this->assertEquals('splade.dev:8080', SpladeMiddleware::urlToHostAndPort('http://splade.dev:8080'));
        $this->assertEquals('splade.dev:8080', SpladeMiddleware::urlToHostAndPort('https://splade.dev:8080'));

        $this->assertEquals('splade.dev:80', SpladeMiddleware::urlToHostAndPort('http://splade.dev/path'));
        $this->assertEquals('splade.dev:443', SpladeMiddleware::urlToHostAndPort('https://splade.dev/path'));
        $this->assertEquals('splade.dev:8080', SpladeMiddleware::urlToHostAndPort('http://splade.dev:8080/path'));
        $this->assertEquals('splade.dev:8080', SpladeMiddleware::urlToHostAndPort('https://splade.dev:8080/path'));

        $this->assertEquals('splade.dev:80', SpladeMiddleware::urlToHostAndPort('splade.dev/path'));
        $this->assertEquals('splade.dev:80', SpladeMiddleware::urlToHostAndPort('splade.dev:80/path'));
        $this->assertEquals('splade.dev:443', SpladeMiddleware::urlToHostAndPort('splade.dev:443/path'));
        $this->assertEquals('splade.dev:8080', SpladeMiddleware::urlToHostAndPort('splade.dev:8080/path'));
    }
}
