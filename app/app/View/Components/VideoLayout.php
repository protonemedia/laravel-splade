<?php

namespace App\View\Components;

use App\Models\User;
use ProtoneMedia\Splade\Components\PersistentComponent;

class VideoLayout extends PersistentComponent
{
    public function render()
    {
        return view('navigation.videoLayout', [
            'users' => User::query()->inRandomOrder()->limit(3)->get(),
        ]);
    }
}
