<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class SpladeInstallCommand extends Command
{
    public $signature = 'splade:install';

    public $description = 'Install the Splade components and resources';

    public function handle(): int
    {
        $this->installRouteMiddleware();

        $this->installExceptionHandler();

        // Install NPM packages...
        $this->updateNodePackages(function ($packages) {
            return [
                '@protonemedia/laravel-splade' => '^0.2.0',
                '@tailwindcss/forms'           => '^0.5.2',
                '@tailwindcss/typography'      => '^0.5.2',
                '@vitejs/plugin-vue'           => '^3.0.0',
                'autoprefixer'                 => '^10.4.7',
                'laravel-vite-plugin'          => '^0.5.0',
                'postcss'                      => '^8.4.14',
                'tailwindcss'                  => '^3.1.0',
                'vite'                         => '^3.0.0',
                'vue'                          => '^3.2.37',
            ] + $packages;
        });

        // Add SSR build step...
        $this->updateNodeScript();

        // Tailwind Configuration...
        copy(__DIR__ . '/../../stubs/tailwind.config.js', base_path('tailwind.config.js'));
        copy(__DIR__ . '/../../stubs/postcss.config.js', base_path('postcss.config.js'));
        copy(__DIR__ . '/../../stubs/vite.config.js', base_path('vite.config.js'));

        //

        (new Filesystem)->ensureDirectoryExists(base_path('routes'));
        (new Filesystem)->ensureDirectoryExists(resource_path('css'));
        (new Filesystem)->ensureDirectoryExists(resource_path('views'));
        (new Filesystem)->ensureDirectoryExists(resource_path('views/components'));

        (new Filesystem)->deleteDirectory(resource_path('sass'));

        copy(__DIR__ . '/../../stubs/routes/web.php', base_path('routes/web.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/application-logo.blade.php', resource_path('views/components/application-logo.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/application-mark.blade.php', resource_path('views/components/application-mark.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/layout.blade.php', resource_path('views/components/layout.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/nav-link.blade.php', resource_path('views/components/nav-link.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/navigation.blade.php', resource_path('views/components/navigation.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/panel.blade.php', resource_path('views/components/panel.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/components/responsive-nav-link.blade.php', resource_path('views/components/responsive-nav-link.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/docs.blade.php', resource_path('views/docs.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/home.blade.php', resource_path('views/home.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/views/root.blade.php', resource_path('views/root.blade.php'));
        copy(__DIR__ . '/../../stubs/resources/css/app.css', resource_path('css/app.css'));
        copy(__DIR__ . '/../../stubs/resources/js/app.js', resource_path('js/app.js'));
        copy(__DIR__ . '/../../stubs/resources/js/ssr.js', resource_path('js/ssr.js'));

        $this->comment('All done');
        $this->comment('Please execute "npm install && npm run dev" to build your assets.');

        return self::SUCCESS;
    }

    protected function installExceptionHandler()
    {
        $exceptionHandler = file_get_contents(app_path('Exceptions/Handler.php'));

        $search = 'public function register()' . PHP_EOL . '    {';

        $registerMethodAfter = Str::after($exceptionHandler, $search);

        $renderable = '$this->renderable(\ProtoneMedia\Splade\SpladeCore::exceptionHandler($this));';

        if (Str::contains($exceptionHandler, $renderable)) {
            return;
        }

        file_put_contents(
            app_path('Exceptions/Handler.php'),
            str_replace(
                $registerMethodAfter,
                PHP_EOL . '        ' . $renderable . PHP_EOL . $registerMethodAfter,
                $exceptionHandler
            )
        );
    }

    /**
     * Install the middleware to a group in the application Http Kernel.
     *
     * @return void
     */
    protected function installRouteMiddleware()
    {
        $httpKernel = file_get_contents(app_path('Http/Kernel.php'));

        $search = 'protected $routeMiddleware = [' . PHP_EOL;

        $routeMiddlewareAfter = Str::after($httpKernel, $search);

        $routeMiddleware = "'splade'           => \ProtoneMedia\Splade\Http\SpladeMiddleware::class";

        if (Str::contains($httpKernel, $routeMiddleware)) {
            return;
        }

        file_put_contents(
            app_path('Http/Kernel.php'),
            str_replace(
                $routeMiddlewareAfter,
                '        ' . $routeMiddleware . ',' . PHP_EOL . $routeMiddlewareAfter,
                $httpKernel
            )
        );
    }

    protected function updateNodeScript()
    {
        if (!file_exists(base_path('package.json'))) {
            return;
        }

        $packageFile = file_get_contents(base_path('package.json'));

        file_put_contents(
            base_path('package.json'),
            str_replace('"vite build"', '"vite build && vite build --ssr"', $packageFile)
        );
    }

    /**
     * Update the "package.json" file.
     *
     * @param  callable  $callback
     * @param  bool  $dev
     * @return void
     */
    protected static function updateNodePackages(callable $callback, $dev = true)
    {
        if (!file_exists(base_path('package.json'))) {
            return;
        }

        $configurationKey = $dev ? 'devDependencies' : 'dependencies';

        $packages = json_decode(file_get_contents(base_path('package.json')), true);

        $packages[$configurationKey] = $callback(
            array_key_exists($configurationKey, $packages) ? $packages[$configurationKey] : [],
            $configurationKey
        );

        ksort($packages[$configurationKey]);

        file_put_contents(
            base_path('package.json'),
            json_encode($packages, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . PHP_EOL
        );
    }
}
