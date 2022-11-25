<?php

namespace Tests\Browser;

use Illuminate\Broadcasting\Broadcasters\PusherBroadcaster;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Http;
use Symfony\Component\Process\Process;

trait UsesWebsocketsServerTrait
{
    private ?Process $websocketsServerProcess = null;

    protected function setUpUsesWebsocketsServerTrait()
    {
        /** @var PusherBroadcaster $connection */
        $connection = Broadcast::connection();

        $settings = $connection->getPusher()->getSettings();

        $url = "{$settings['scheme']}://{$settings['host']}:{$settings['port']}";

        try {
            Http::get($url);
        } catch (ConnectionException $e) {
            $this->websocketsServerProcess = tap(Process::fromShellCommandline('php artisan websockets:serve', base_path()))->start();

            retry(10, function () use ($url) {
                Http::get($url);
            }, 1000);
        }
    }

    protected function tearDownUsesWebsocketsServerTrait()
    {
        if ($this->websocketsServerProcess) {
            $this->websocketsServerProcess->stop(0);
        }
    }
}
