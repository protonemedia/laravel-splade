<?php

namespace Tests\Unit\Bridge;

use Illuminate\Http\Request;
use ProtoneMedia\Splade\Bridge\ComponentState;
use ProtoneMedia\Splade\Bridge\CouldNotResolveComponentInstance;
use Tests\TestCase;

class ComponentStateTest extends TestCase
{
    private function makeRequest(string $encodedInstance, string $url, string $verb): Request
    {
        $instance = new ComponentState;

        return Request::createFromGlobals()->merge([
            'instance'  => $encodedInstance,
            'url'       => $url,
            'verb'      => $verb,
            'signature' => $instance->generateSignature($encodedInstance, $url, $verb),
        ]);
    }

    /** @test */
    public function it_can_generate_and_validate_signatures()
    {
        $instance = new ComponentState;

        $signature = $instance->generateSignature('encodedInstance', 'url', 'verb');

        $this->assertIsString($signature);

        $this->assertTrue($instance->requestHasValidSignature(
            $request = $this->makeRequest('encodedInstance', 'url', 'verb'),
            'signature',
        ));

        $request->merge(['signature' => 'invalid']);

        $this->assertFalse($instance->requestHasValidSignature($request, 'signature'));
    }

    /** @test */
    public function it_throws_an_exception_when_the_component_can_not_be_resolved()
    {
        $instance = new ComponentState;

        $request = Request::createFromGlobals();

        try {
            $instance->resolveInstance($request);
        } catch(CouldNotResolveComponentInstance $e) {
            return $this->assertTrue(true);
        }

        $this->fail('The exception was not thrown.');
    }

    /** @test */
    public function it_can_resolve_an_encrypted_component_from_the_request()
    {
        $service = new ComponentState;

        $instance       = new DummyComponent;
        $instance->name = 'Splade';

        $request = Request::createFromGlobals();
        $request->merge([
            'instance' => $service->encryptInstance($instance),
        ]);

        $decrypted = $service->resolveInstance($request);

        $this->assertEquals($instance, $decrypted);
    }

    /** @test */
    public function it_can_resolve_an_encrypted_component_from_the_request_and_merge_the_given_props()
    {
        $service = new ComponentState;

        $instance = new DummyComponent;

        $request = Request::createFromGlobals();
        $request->merge([
            'props'    => ['name' => 'Splade', 'nonExisting' => 'value'],
            'instance' => $service->encryptInstance($instance),
        ]);

        $decrypted = $service->resolveInstance($request);

        $this->assertNotEquals($instance, $decrypted);
        $this->assertEquals('Splade', $decrypted->name);
    }
}
