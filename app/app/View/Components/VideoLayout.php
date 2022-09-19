<?php

namespace App\View\Components;

use ProtoneMedia\Splade\Components\PersistentComponent;

class VideoLayout extends PersistentComponent
{
    public function render()
    {
        return view('navigation.videoLayout');
    }
}
