<?php

namespace Tests\Unit\Bridge;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Bridge\ComponentState;
use ProtoneMedia\Splade\Components\WithVue;
use Tests\TestCase;

class ComponentControllerTest extends TestCase
{
    private function dataForComponent(Component $component): array
    {
        /** @var WithVue $component */
        $vueData = $component->_vueData();

        $data = [
            'data'      => [],
            'instance'  => $vueData['instance'],
            'method'    => 'setName',
            'props'     => [],
            'signature' => null,
            'url'       => route('navigation.one.auth'),
            'verb'      => 'get',
        ];

        $data['signature'] = (new ComponentState)->generateSignatureFromDataArray($data);

        return $data;
    }

    /** @test */
    public function it_aborts_when_the_request_is_incomplete()
    {
        $this->post(route('splade.withVueBridge'))
            ->assertForbidden()
            ->assertSee('Invalid request');
    }

    /** @test */
    public function it_aborts_when_the_request_has_no_valid_signature()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        $data['signature'] = 'invalid';

        $this->post(route('splade.withVueBridge'), $data)
            ->assertForbidden()
            ->assertSee('Malicious request');
    }

    /** @test */
    public function it_aborts_when_it_cant_resolve_the_instance()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        $data['instance'] .= 'invalid';
        $data['signature'] = (new ComponentState)->generateSignatureFromDataArray($data);

        $this->post(route('splade.withVueBridge'), $data)
            ->assertForbidden()
            ->assertSee('Component not found');
    }

    /** @test */
    public function it_applies_the_original_middleware()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        // Just to be sure
        Auth::logout();

        $this->post(route('splade.withVueBridge'), $data)
            ->assertRedirectToRoute('login');
    }

    /** @test */
    public function it_makes_sure_the_component_method_exists()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        $data['method'] .= 'invalid';
        $data['signature'] = (new ComponentState)->generateSignatureFromDataArray($data);

        $this->actingAs(User::firstOrFail())
            ->post(route('splade.withVueBridge'), $data)
            ->assertForbidden()
            ->assertSee('Method not found');
    }

    /** @test */
    public function it_calls_the_method_without_parameters()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        $response = $this->actingAs(User::firstOrFail())
            ->post(route('splade.withVueBridge'), $data)
            ->assertOk()
            ->assertJson(['data' => ['name' => 'Tailwind']]);

        $instance = (new ComponentState)->decryptInstance($response->json('instance'));

        $this->assertInstanceOf(DummyComponent::class, $instance);
        $this->assertEquals('Tailwind', $instance->name);
    }

    /** @test */
    public function it_calls_the_method_with_a_parameter()
    {
        $component = new DummyComponent;

        $data = $this->dataForComponent($component);

        $data['data']      = ['Splade'];
        $data['signature'] = (new ComponentState)->generateSignatureFromDataArray($data);

        $response = $this->actingAs(User::firstOrFail())
            ->post(route('splade.withVueBridge'), $data)
            ->assertOk()
            ->assertJson(['data' => ['name' => 'Splade']]);

        $instance = (new ComponentState)->decryptInstance($response->json('instance'));

        $this->assertInstanceOf(DummyComponent::class, $instance);
        $this->assertEquals('Splade', $instance->name);
    }
}
