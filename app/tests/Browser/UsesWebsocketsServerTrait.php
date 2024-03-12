<?php

namespace Tests\Browser;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Symfony\Component\Process\Process;

trait UsesWebsocketsServerTrait
{
    private ?Process $websocketsServerProcess = null;

    protected function setUpUsesWebsocketsServerTrait()
    {
        $reverbServer = config('reverb.servers.reverb');

        $url = "{$reverbServer['host']}:{$reverbServer['port']}";

        try {
            Http::get($url);
        } catch (ConnectionException $e) {
            $this->websocketsServerProcess = tap(Process::fromShellCommandline('php artisan reverb:start', base_path()))->start();

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
