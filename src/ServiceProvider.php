<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\View\Factory;
use Laravel\Dusk\Browser;
use ProtoneMedia\Splade\Commands\PublishFormStylesheetsCommand;
use ProtoneMedia\Splade\Commands\SpladeInstallCommand;
use ProtoneMedia\Splade\Commands\SsrTestCommand;
use ProtoneMedia\Splade\Http\BladeDirectives;
use ProtoneMedia\Splade\Http\PrepareViewWithLazyComponents;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/splade.php', 'splade');
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->registerPublishedPaths();

        $this->commands([
            PublishFormStylesheetsCommand::class,
            SpladeInstallCommand::class,
            SsrTestCommand::class,
        ]);

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'splade');

        $this->registerBindingsInContainer();

        static::registerTransitionAnimations(
            $this->app->make(TransitionRepository::class)
        );

        (new PrepareViewWithLazyComponents)
            ->registerMacro()
            ->registerEventListener();

        $this->registerBladeComponentsAndDirectives();
        $this->registerDuskMacros();
        $this->registerViewMacros();
        $this->registerRouteForEventRedirect();
    }

    /**
     * Published the config and view files when the app
     * is running in the console.
     *
     * @return void
     */
    private function registerPublishedPaths()
    {
        if ($this->app->runningInConsole()) {
            return;
        }

        $this->publishes([
            __DIR__ . '/../config/splade.php' => config_path('splade.php'),
        ], 'config');

        $this->publishes([
            __DIR__ . '/../resources/views' => base_path('resources/views/vendor/splade'),
        ], 'views');
    }

    /**
     * Registers bindings in the container.
     *
     * @return void
     */
    private function registerBindingsInContainer()
    {
        // Splade Core
        $this->app->singleton(SpladeCore::class, function ($app) {
            return new SpladeCore(fn () => $app['request']);
        });

        $this->app->alias(SpladeCore::class, 'laravel-splade');

        // Toast Builder
        $this->app->singleton('laravel-splade-toast', function ($app) {
            return $app->make(SpladeCore::class)->toastBuilder();
        });

        // Splade Head (SEO)
        $this->app->singleton(Head::class, function ($app) {
            return $app->make(SpladeCore::class)->head();
        });

        $this->app->alias(Head::class, 'laravel-splade-seo');

        // Transition Repository
        $this->app->singleton(TransitionRepository::class, function ($app) {
            return new TransitionRepository;
        });

        $this->app->alias(TransitionRepository::class, 'laravel-splade-transition-repository');
    }

    /**
     * Registers the Splade Blade components and the directives.
     *
     * @return void
     */
    private function registerBladeComponentsAndDirectives()
    {
        (new BladeDirectives)->registerHandlers();

        // This is for internal use only so we ignore the prefix.
        Blade::component(
            Components\SpladeComponent::class
        );

        Blade::components([
            Components\ButtonWithDropdown::class,
            Components\Confirm::class,
            Components\Data::class,
            Components\Defer::class,
            Components\Dialog::class,
            Components\Dropdown::class,
            Components\Dynamic::class,
            Components\Errors::class,
            Components\Event::class,
            Components\Flash::class,
            Components\Form::class,
            Components\Lazy::class,
            Components\Modal::class,
            Components\ModalWrapper::class,
            Components\Outside::class,
            Components\State::class,
            Components\Table::class,
            Components\TableWrapper::class,
            Components\Teleport::class,
            Components\Toast::class,
            Components\ToastWrapper::class,
            Components\Toggle::class,
            Components\Transition::class,

            Components\Form\Checkbox::class,
            Components\Form\Checkboxes::class,
            Components\Form\File::class,
            Components\Form\Group::class,
            Components\Form\Input::class,
            Components\Form\Radio::class,
            Components\Form\Radios::class,
            Components\Form\Textarea::class,
            Components\Form\Select::class,
            Components\Form\Submit::class,
        ], config('splade.blade.component_prefix'));
    }

    /**
     * Registers Dusk macros to interact with the Choices.js library.
     *
     * @return void
     */
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
     * Registers ComponentAttributeBag and View\Factory macros.
     *
     * @return void
     */
    private function registerViewMacros()
    {
        Factory::macro('getFirstSlot', function () {
            /** @var Factory $this */
            return $this->slots[0] ?? [];
        });

        ComponentAttributeBag::macro('mergeVueBinding', function ($attribute, $value, bool $omitBlankValue = true) {
            /** @var ComponentAttributeBag $this */
            if (blank($value)) {
                return $this;
            }

            $isEvent = Str::startsWith($attribute, ['@', 'v-on:']);

            foreach (['@', 'v-on:', ':', 'v-bind:'] as $modifier) {
                if (Str::startsWith($attribute, $modifier)) {
                    $attribute = Str::substr($attribute, strlen($modifier));
                }
            }

            $shortBindAttribute = ($isEvent ? '@' : ':') . $attribute;
            $fullBindAttribute  = ($isEvent ? 'v-on:' : 'v-bind:') . $attribute;

            return $this->unless($this->has($shortBindAttribute) || $this->has($fullBindAttribute), function () use ($fullBindAttribute, $value) {
                if (is_bool($value)) {
                    $value = $value ? 'true' : 'false';
                }

                /** @var ComponentAttributeBag $this */
                return $this->merge([$fullBindAttribute => $value]);
            });
        });
    }

    /**
     * Registers a route that's used to redirect
     * the browser on broadcasted events.
     *
     * @return void
     */
    private function registerRouteForEventRedirect()
    {
        Route::get(config('splade.event_redirect_route'), function ($uuid) {
            $data = Cache::pull(EventRedirect::class . $uuid);

            abort_unless($data, 404);

            return Redirect::to($data['target'])->with($data['with'] ?? []);
        })->name('splade.eventRedirect')->middleware('signed');
    }

    /**
     * Adds the default transitions to the repository.
     *
     * @param  \ProtoneMedia\Splade\TransitionRepository  $transitionRepository
     * @return void
     */
    public static function registerTransitionAnimations(TransitionRepository $transitionRepository)
    {
        $transitionRepository
            ->new(
                name: 'default',
                enter: 'transition transform ease-in-out duration-300',
                enterFrom: 'opacity-0 scale-95',
                enterTo: 'opacity-100 scale-100',
                leave: 'transition transform ease-in-out duration-300',
                leaveFrom: 'opacity-100 scale-100',
                leaveTo: 'opacity-0 scale-95',
            )
            ->new(
                name: 'opacity',
                enter: 'transition ease-in-out duration-300',
                enterFrom: 'opacity-0',
                enterTo: 'opacity-100',
                leave: 'transition ease-in-out duration-300',
                leaveFrom: 'opacity-100',
                leaveTo: 'opacity-0',
            )
            ->new(
                name: 'fade',
                enter: 'transition transform ease-in-out duration-300',
                enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                leave: 'transition transform ease-in-out duration-300',
                leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
            )
            ->new(
                name: 'slide-right',
                enter: 'transform transform ease-in-out duration-300',
                enterFrom: 'opacity-0 translate-x-full',
                enterTo: 'opacity-100 translate-x-0',
                leave: 'transform transform ease-in-out duration-300',
                leaveFrom: 'opacity-100 translate-x-0',
                leaveTo: 'opacity-0 translate-x-full',
            );
    }
}
