<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use ProtoneMedia\Splade\Commands\SpladeInstallCommand;
use ProtoneMedia\Splade\Commands\SsrTestCommand;
use ProtoneMedia\Splade\Http\BladeDirectives;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/splade.php' => config_path('splade.php'),
            ], 'config');

            $this->publishes([
                __DIR__ . '/../resources/views' => base_path('resources/views/vendor/splade'),
            ], 'views');
        }

        $this->commands([
            SpladeInstallCommand::class,
            SsrTestCommand::class,
        ]);

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'splade');

        //

        $this->app->singleton(SpladeCore::class, function ($app) {
            return new SpladeCore(fn () => $app['request']);
        });

        $this->app->alias(SpladeCore::class, 'laravel-splade');

        $this->app->singleton('laravel-splade-toast', function ($app) {
            return $app->make(SpladeCore::class)->toastBuilder();
        });

        $this->app->singleton(Head::class, function ($app) {
            return $app->make(SpladeCore::class)->head();
        });

        $this->app->alias(Head::class, 'laravel-splade-seo');

        (new BladeDirectives)->registerHandlers();

        Route::get(config('splade.event_redirect_route'), function ($uuid) {
            $data = Cache::pull(EventRedirect::class . $uuid);

            if (!$data) {
                abort(404);
            }

            return Redirect::to($data['target'])->with($data['with'] ?? []);
        })->name('splade.eventRedirect')->middleware('signed');

        $cellDirectiveName = config('splade.blade.table_cell_directive');

        Blade::directive($cellDirectiveName, function ($expression) {
            preg_match("/('|\")(\w+)('|\")(,)(\s*)(.*)/", $expression, $matches);

            $name = trim($matches[2]);

            $arguments = trim($matches[6], '\[\]');

            $splitted = preg_split('/\],(\s*)/', $arguments);

            $slotArguments = trim($splitted[0]       ?? '');
            $slotUses      = trim(ltrim($splitted[1] ?? '', '['));

            $function = "function ({$slotArguments})";

            if ($slotUses) {
                $function .= " use ({$slotUses})";
            }

            return "<?php \$__env->slot('spladeTableCell{$name}', {$function} { ?>";
        });

        Blade::directive('end' . $cellDirectiveName, function () {
            return '<?php }); ?>';
        });

        Blade::components([
            Components\ButtonWithDropdown::class,
            Components\Confirm::class,
            Components\Data::class,
            Components\Defer::class,
            Components\Errors::class,
            Components\Event::class,
            Components\Flash::class,
            Components\Form::class,
            Components\Modal::class,
            Components\ModalWrapper::class,
            Components\State::class,
            Components\Table::class,
            Components\TableWrapper::class,
            Components\Toast::class,
            Components\ToastWrapper::class,
            Components\Toggle::class,
        ], config('splade.blade.component_prefix'));
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/splade.php', 'splade');
    }
}
