<?php

namespace App\View\Components;

use App\Models\User;
use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\WithVue;

class FakeMail extends Component
{
    use WithVue;

    public function __construct(
        public User $user,
        public ?string $prefix = ''
    ) {
    }

    public function randomize()
    {
        $this->user->update([
            'email' => $this->prefix . fake()->email,
        ]);
    }

    public function render()
    {
        return view('components.fake-mail');
    }
}
