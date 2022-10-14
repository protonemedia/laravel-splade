<?php

namespace Tests;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Laravel\Dusk\TestCase as BaseTestCase;
use Spatie\Snapshots\MatchesSnapshots;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;
    use MatchesSnapshots;

    /**
     * Create a new Browser instance.
     *
     * @param  \Facebook\WebDriver\Remote\RemoteWebDriver  $driver
     * @return \Tests\Browser
     */
    protected function newBrowser($driver)
    {
        return new Browser($driver);
    }

    public function tableUrls()
    {
        return [
            ['/table/users/spatie/'],
            ['/table/users/splade/'],
            ['/table/users/spatieWrapped/'],
            ['/table/users/spladeWrapped/'],
        ];
    }

    protected function configureDownloadPath($browser, $path)
    {
        (new Filesystem)->ensureDirectoryExists($path);
        (new Filesystem)->cleanDirectory($path);

        $url = $browser->driver->getCommandExecutor()->getAddressOfRemoteServer();
        $uri = '/session/' . $browser->driver->getSessionID() . '/chromium/send_command';

        Http::post($url . $uri, [
            'cmd'    => 'Page.setDownloadBehavior',
            'params' => ['behavior' => 'allow', 'downloadPath' => $path],
        ]);

        $this->beforeApplicationDestroyed(fn () => (new Filesystem)->cleanDirectory($path));
    }

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     *
     * @return void
     */
    public static function prepare()
    {
        if (!static::runningInSail()) {
            static::startChromeDriver();
        }
    }

    public function assertScreenshotSnapshot($name): self
    {
        $names = Arr::wrap($name);

        foreach ($names as $name) {
            $filePath = sprintf('%s/%s.png', rtrim(Browser::$storeScreenshotsAt, '/'), $name);

            // $this->assertMatchesFileSnapshot($filePath);
        }

        return $this;
    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {
        $options = (new ChromeOptions)->addArguments(collect([
            $this->shouldStartMaximized() ? '--start-maximized' : '--window-size=1920,1080',
            '--force-color-profile=srgb',
            '--force-device-scale-factor=2',
        ])->unless($this->hasHeadlessDisabled(), function ($items) {
            return $items->merge([
                '--disable-gpu',
                '--headless',
            ]);
        })->all());

        return RemoteWebDriver::create(
            $_ENV['DUSK_DRIVER_URL'] ?? 'http://localhost:9515',
            DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY,
                $options
            )
        );
    }

    /**
     * Determine whether the Dusk command has disabled headless mode.
     *
     * @return bool
     */
    protected function hasHeadlessDisabled()
    {
        return isset($_SERVER['DUSK_HEADLESS_DISABLED']) || isset($_ENV['DUSK_HEADLESS_DISABLED']);
    }

    /**
     * Determine if the browser window should start maximized.
     *
     * @return bool
     */
    protected function shouldStartMaximized()
    {
        return isset($_SERVER['DUSK_START_MAXIMIZED']) || isset($_ENV['DUSK_START_MAXIMIZED']);
    }
}
