<?php

namespace Tests\Feature;

use Illuminate\Support\Carbon;
use ProtoneMedia\Splade\Http\SpladeMiddleware;
use ProtoneMedia\Splade\SpladeCore;
use Tests\TestCase;

class LazyTest extends TestCase
{
    /** @test */
    public function it_doesnt_resolve_the_lazy_data()
    {
        $this->withoutMiddleware(SpladeMiddleware::class)
            ->get('/lazy')
            ->assertViewHas('always', 'always')
            ->assertViewHas('init', 'init')
            ->assertViewHas('lazy', '')
            ->assertViewHas('time', '');
    }

    /** @test */
    public function it_resolves_the_lazy_data_on_lazy_loading()
    {
        Carbon::setTestNow(now());

        $this->withoutMiddleware(SpladeMiddleware::class)
            ->get('/lazy', [SpladeCore::HEADER_LAZY => 0])
            ->assertViewHas('always', 'always')
            ->assertViewHas('init', null)
            ->assertViewHas('lazy', ['key' => 'Hi from controller!'])
            ->assertViewHas('time', now()->format('H:i:s'));
    }
}
