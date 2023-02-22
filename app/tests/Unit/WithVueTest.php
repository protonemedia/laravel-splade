<?php

namespace Tests\Unit;

use App\Models\Project;
use App\Models\User;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Bridge\MiddlewareException;
use ProtoneMedia\Splade\Components\WithVue;
use Tests\TestCase;

class DummyRedirectMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        return redirect()->to('/');
    }
}

class WithVueTest extends TestCase
{
    /** @test */
    public function it_can_apply_middleware()
    {
        $instance = new class
        {
            use WithVue;
        };

        $this->assertGuest();
        $this->assertFalse($instance->middleware());
        $this->assertFalse($instance->middleware('guest'));

        try {
            $instance->middleware(DummyRedirectMiddleware::class);
        } catch(MiddlewareException $e) {
            $this->assertTrue($e->report());
            $this->assertInstanceOf(RedirectResponse::class, $e->render());

            return;
        }

        $this->fail('The middleware did not throw an exception.');
    }

    /** @test */
    public function it_return_public_available_methods()
    {
        $instance = new class extends Component
        {
            use WithVue;

            public function foo()
            {
            }

            protected function bar()
            {
            }

            private function baz()
            {
            }
        };

        $this->assertEquals(['foo'], $instance->_availableMethods());
    }

    /** @test */
    public function it_can_restore_data_properties_from_an_array()
    {
        $instance = new class extends Component
        {
            use WithVue;

            public function __construct(
                public string $name = '',
                public string $untouched = 'Laravel',
                public ?User $user = null,
                public ?Collection $projects = null,
                private string $secret = 'secret'
            ) {
                $this->user = new User(['name' => 'John Doe']);

                $this->projects = new Collection([
                    new Project(['name' => 'Project 1']),
                    new Project(['name' => 'Project 2']),
                    new Project(['name' => 'Project 3']),
                ]);
            }
        };

        $instance->_restoreProperties([
            'name'     => 'Splade',
            'user'     => ['name' => 'Jane Doe'],
            'projects' => [
                ['name' => 'Project 1'],
                ['name' => 'Project Two'],
                ['name' => 'Project 3'],
            ],
            'secret' => 'invalid',
        ]);

        $this->assertEquals('Splade', $instance->name);
        $this->assertEquals('Laravel', $instance->untouched);
        $this->assertEquals('Jane Doe', $instance->user->name);
        $this->assertEquals('Project 1', $instance->projects->get(0)->name);
        $this->assertEquals('Project Two', $instance->projects->get(1)->name);
        $this->assertEquals('Project 3', $instance->projects->get(2)->name);
        $this->assertEquals('secret', invade($instance)->secret);
    }

    /** @test */
    public function it_can_serialize_data_properties()
    {
        $instance = new class extends Component
        {
            use WithVue;

            public function __construct(
                public string $name = 'Splade',
                public ?User $user = null,
                public ?Collection $projects = null,
                protected string $untouched = 'Laravel',
                private string $secret = 'secret'
            ) {
                $this->user = new User(['name' => 'John Doe']);

                $this->projects = new Collection([
                    new Project(['name' => 'Project 1']),
                    new Project(['name' => 'Project 2']),
                    new Project(['name' => 'Project 3']),
                ]);
            }
        };

        $this->assertEquals([
            'name'     => 'Splade',
            'user'     => (object) ['name' => 'John Doe'],
            'projects' => [
                (object) ['name' => 'Project 1'],
                (object) ['name' => 'Project 2'],
                (object) ['name' => 'Project 3'],
            ],
        ], invade($instance)->_data());
    }
}
