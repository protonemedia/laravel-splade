<?php

namespace Tests\Browser;

use Illuminate\Broadcasting\Broadcasters\PusherBroadcaster;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Http;
use Symfony\Component\Process\Process;

trait UsesWebsocketsServerTrait
{
    private $websocketsServerProcess;

    protected function setUpUsesWebsocketsServerTrait()
    {
        try {
            /** @var PusherBroadcaster $connection */
            $connection = Broadcast::connection();
            $settings   = $connection->getPusher()->getSettings();
            Http::get("{$settings['scheme']}://{$settings['host']}:{$settings['port']}");
        } catch (ConnectionException $e) {
            $this->websocketsServerProcess = tap(Process::fromShellCommandline('php artisan websockets:serve', base_path()))->start();
        }
    }

    protected function tearDownUsesWebsocketsServerTrait()
    {
        if ($this->websocketsServerProcess) {
            $this->websocketsServerProcess->stop();
        }
    }
}
