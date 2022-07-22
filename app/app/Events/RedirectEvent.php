<?php

namespace App\Events;

use ProtoneMedia\Splade\Facades\Splade;

class OrderWasShipped implements ShouldBroadcastNow
{
    public function broadcastOn()
    {
        return new PrivateChannel('Splade');
    }

    public function broadcastWith()
    {
        return [
            Splade::refreshOnEvent(),

            Splade::redirectOnEvent()->route('navigation.one'),

            Splade::toastOnEvent('Your order was shipped!')
                ->rightBottom()
                ->info(),
        ];
    }
}
