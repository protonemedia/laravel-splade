<?php

namespace App\Http\Controllers;

use App\Events\RedirectEvent;
use App\Events\RefreshEvent;
use App\Events\SimpleEvent;
use App\Events\ToastEvent;
use Illuminate\Support\Facades\Log;

class EventController
{
    public function redirect()
    {
        Log::info('Hi from event controller');
        event(new RedirectEvent);
    }

    public function refresh()
    {
        Log::info('Hi from event controller');
        event(new RefreshEvent);
    }

    public function simple()
    {
        Log::info('Hi from event controller');
        event(new SimpleEvent);
    }

    public function toast()
    {
        Log::info('Hi from event controller');
        event(new ToastEvent);
    }
}
