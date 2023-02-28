<?php

namespace Tests\Unit;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Transformers\UserTransformer;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\InvalidTransformerException;
use ProtoneMedia\Splade\Transformer;
use Tests\TestCase;

class TransformerTest extends TestCase
{
    /** @test */
    public function it_returns_the_instance_when_no_transformer_has_been_found()
    {
        $user = User::firstOrFail();

        $transformer = $this->app->make(Transformer::class);

        $this->assertTrue($transformer($user)->is($user));
    }

    /** @test */
    public function it_throws_an_exception_when_the_transformer_is_invalid()
    {
        $user = User::firstOrFail();

        Splade::transformUsing(User::class, []);

        $transformer = $this->app->make(Transformer::class);

        try {
            $this->assertTrue($transformer($user)->is($user));
        } catch(InvalidTransformerException $e) {
            return $this->assertTrue(true);
        }

        $this->fail('Should have thrown an exception');
    }

    /** @test */
    public function it_throws_an_exception_when_a_transformer_is_missing()
    {
        $user = User::firstOrFail();

        Splade::requireTransformer();

        $transformer = $this->app->make(Transformer::class);

        try {
            $this->assertTrue($transformer($user)->is($user));
        } catch(InvalidTransformerException $e) {
            return $this->assertTrue(true);
        }

        $this->fail('Should have thrown an exception');
    }

    /** @test */
    public function it_can_transform_using_a_closure()
    {
        $user = User::firstOrFail();

        Splade::requireTransformer()->transformUsing(User::class, function ($user) {
            return [
                'name'  => $user->name,
                'email' => $user->email,
            ];
        });

        $transformer = $this->app->make(Transformer::class);

        $this->assertEquals([
            'name'  => $user->name,
            'email' => $user->email,
        ], $transformer($user));
    }

    /** @test */
    public function it_can_transform_using_an_api_resource()
    {
        $user = User::firstOrFail();

        Splade::transformUsing(User::class, UserResource::class);

        $transformer = $this->app->make(Transformer::class);

        $this->assertEquals([
            'name'  => $user->name,
            'email' => $user->email,
        ], $transformer($user));
    }

    /** @test */
    public function it_can_transform_using_a_fractal_transformer()
    {
        $user = User::firstOrFail();

        Splade::transformUsing(User::class, UserTransformer::class);

        $transformer = $this->app->make(Transformer::class);

        $this->assertEquals([
            'name'  => $user->name,
            'email' => $user->email,
        ], $transformer($user));
    }

    /** @test */
    public function it_can_transform_using_an_instance_that_has_a_transform_method()
    {
        $user = User::firstOrFail();

        Splade::transformUsing(User::class, new UserTransformer);

        $transformer = $this->app->make(Transformer::class);

        $this->assertEquals([
            'name'  => $user->name,
            'email' => $user->email,
        ], $transformer($user));
    }
}