<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Illuminate\Support\Str;
use Laravel\Dusk\Browser;
use ProtoneMedia\Splade\Commands\PublishFormStylesheetsCommand;
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
            PublishFormStylesheetsCommand::class,
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
        $this->registerBladeComponents();
        $this->registerDuskMacros();

        Route::get(config('splade.event_redirect_route'), function ($uuid) {
            $data = Cache::pull(EventRedirect::class . $uuid);

            if (!$data) {
                abort(404);
            }

            return Redirect::to($data['target'])->with($data['with'] ?? []);
        })->name('splade.eventRedirect')->middleware('signed');
    }

    private function registerBladeComponents()
    {
        Blade::components([
            Components\ButtonWithDropdown::class,
            Components\Confirm::class,
            Components\Data::class,
            Components\Defer::class,
            Components\Dropdown::class,
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
            Components\Transition::class,

            Components\Form\Checkbox::class,
            Components\Form\File::class,
            Components\Form\Group::class,
            Components\Form\Input::class,
            Components\Form\Radio::class,
            Components\Form\Textarea::class,
            Components\Form\Select::class,
            Components\Form\Submit::class,
        ], config('splade.blade.component_prefix'));
    }

    private function registerDuskMacros()
    {
        if (!class_exists(Browser::class)) {
            return;
        }

        if ($macroName = config('splade.dusk.choices_select_macro')) {
            Browser::macro($macroName, function ($selectName, $value = null): Browser {
                /** @var Browser browser */
                $browser = $this;

                if (Str::startsWith($selectName, '@')) {
                    $browser->click($selectName);
                } else {
                    $browser->click("div.choices__inner[data-select-name='{$selectName}']");
                }

                return $browser
                    ->whenAvailable('div.choices.is-open', function (Browser $browser) use ($value) {
                        $value = $value ? addslashes($value) : $value;

                        $selector = $value
                            ? "div.choices__item[data-value='{$value}']"
                            : 'div.choices__item[data-value]:not(.choices__placeholder)';

                        $browser->click($selector);
                    })
                    ->waitUntilMissing("div.choices.is-open[data-type='select-one']");
            });
        }

        if ($macroName = config('splade.dusk.choices_remove_item_macro')) {
            Browser::macro($macroName, function ($selectName, $value = null): Browser {
                /** @var Browser browser */
                $browser = $this;

                return $browser
                    ->within("div.choices__inner[data-select-name='{$selectName}'] div.choices__list", function (Browser $browser) use ($value) {
                        $value = $value ? addslashes($value) : $value;

                        $selector = $value
                            ? "div.choices__item[data-value='{$value}'] button"
                            : 'div.choices__item button';

                        $browser->click($selector);
                    });
            });
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/splade.php', 'splade');
    }
}
