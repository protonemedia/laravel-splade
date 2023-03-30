<?php

namespace ProtoneMedia\Splade;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Middleware\ValidateSignature;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\Compilers\BladeCompiler;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\View\Factory;
use Illuminate\View\View;
use Laravel\Dusk\Browser;
use ProtoneMedia\Splade\Bridge\ComponentController;
use ProtoneMedia\Splade\Commands\CleanupTemporaryFileUploads;
use ProtoneMedia\Splade\Commands\FormMakeCommand;
use ProtoneMedia\Splade\Commands\FormRequestMakeCommand;
use ProtoneMedia\Splade\Commands\PublishFormStylesheetsCommand;
use ProtoneMedia\Splade\Commands\ShowSpladeVersions;
use ProtoneMedia\Splade\Commands\SpladeInstallCommand;
use ProtoneMedia\Splade\Commands\SsrTestCommand;
use ProtoneMedia\Splade\Commands\TableMakeCommand;
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\Components\Form\File;
use ProtoneMedia\Splade\FileUploads\Filesystem;
use ProtoneMedia\Splade\FileUploads\HandleSpladeFileUploads;
use ProtoneMedia\Splade\FileUploads\HasSpladeFileUploads;
use ProtoneMedia\Splade\FileUploads\SpladeFile;
use ProtoneMedia\Splade\Http\BladeDirectives;
use ProtoneMedia\Splade\Http\ConfirmPasswordController;
use ProtoneMedia\Splade\Http\EventRedirectController;
use ProtoneMedia\Splade\Http\FileUploadController;
use ProtoneMedia\Splade\Http\TableBulkActionController;
use ProtoneMedia\Splade\Http\TableExportController;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/splade.php', 'splade');

        $this->mergeConfigFrom($defaultSeoPath = __DIR__ . '/../config/splade-seo.php', 'splade-seo');

        if (file_exists($seoPath = config_path('splade-seo.php'))) {
            // New SEO file has been publish, merge into splade config.
            $this->mergeConfigFrom($seoPath, 'splade.seo');
        } elseif (!config('splade.seo')) {
            // The Splade file has not been published, merge the default SEO into the config.
            $this->mergeConfigFrom($defaultSeoPath, 'splade.seo');
        }

        $this->registerCustomBladeCompiler();
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->registerPublishedPaths();

        $this->commands([
            CleanupTemporaryFileUploads::class,
            FormMakeCommand::class,
            FormRequestMakeCommand::class,
            PublishFormStylesheetsCommand::class,
            ShowSpladeVersions::class,
            SpladeInstallCommand::class,
            SsrTestCommand::class,
            TableMakeCommand::class,
        ]);

        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang');
        $this->loadJsonTranslationsFrom(lang_path('vendor/splade'));

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'splade');

        $this->registerBindingsInContainer();

        static::registerTransitionAnimations(
            $this->app->make(TransitionRepository::class)
        );

        $this->registerBladeComponentsAndDirectives();
        $this->registerDuskMacros();
        $this->registerViewMacros();
        $this->registerResponseMacro();
        $this->registerRequestMacros();
        $this->registerRouteForEventRedirect();
        $this->registerMacroForBridgeComponent();
        $this->registerMacroForPasswordConfirmation();
        $this->registerMacroForFileUploads();
        $this->registerMacroForTableRoutes();
    }

    /**
     * Published the config and view files when the app
     * is running in the console.
     *
     * @return void
     */
    private function registerPublishedPaths()
    {
        if (!$this->app->runningInConsole()) {
            return;
        }

        $this->publishes([
            __DIR__ . '/../config/splade.php' => config_path('splade.php'),
        ], 'config');

        $this->publishes([
            __DIR__ . '/../config/splade-seo.php' => config_path('splade-seo.php'),
        ], 'seo');

        $this->publishes([
            __DIR__ . '/../resources/views/components' => base_path('resources/views/vendor/splade/components'),
            __DIR__ . '/../resources/views/form'       => base_path('resources/views/vendor/splade/form'),
            __DIR__ . '/../resources/views/table'      => base_path('resources/views/vendor/splade/table'),
        ], 'views');

        $this->publishes([
            __DIR__ . '/../resources/lang' => base_path('resources/lang/vendor/splade'),
        ], 'translations');
    }

    /**
     * Extends the Blade Compiler with a custom implementation that handles the
     * Lazy, Rehydrae, and Table Cell components.
     *
     * @return void
     */
    protected function registerCustomBladeCompiler()
    {
        $this->app->extend('blade.compiler', function (BladeCompiler $service, $app) {
            return tap(new CustomBladeCompiler(
                $app['files'],
                $app['config']['view.compiled'],
                $app['config']->get('view.relative_hash', false) ? $app->basePath() : '',
                $app['config']->get('view.cache', true),
                $app['config']->get('view.compiled_extension', 'php'),
            ), function ($blade) use ($service) {
                foreach ($service->getClassComponentAliases() as $alias => $component) {
                    $blade->component($component, $alias);
                }

                foreach ($service->getCustomDirectives() as $name => $directive) {
                    $blade->directive($name, $directive);
                }
            });
        });
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

        $this->app->singleton(Transformer::class, function ($app) {
            return new Transformer($app->make(SpladeCore::class));
        });

        // Splade File Uploads
        $this->app->singleton(Filesystem::class, function ($app) {
            $disk = config('splade.file_uploads.disk');

            if (!$disk) {
                config(['filesystems.disks.splade_temporary_file_uploads' => [
                    'driver' => 'local',
                    'root'   => storage_path('splade-temporary-file-uploads'),
                    'throw'  => false,
                ]]);
            }

            return new Filesystem($disk ?: 'splade_temporary_file_uploads');
        });

        $this->app->resolving(HasSpladeFileUploads::class, function ($resolved) {
            return HandleSpladeFileUploads::forFormRequest($resolved);
        });

        $this->app->singleton(EloquentSerializer::class, function () {
            return new EloquentSerializer;
        });
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
            Components\Button::class,
            Components\ButtonWithDropdown::class,
            Components\Cell::class,
            Components\Confirm::class,
            Components\Content::class,
            Components\Data::class,
            Components\DataStores::class,
            Components\Defer::class,
            Components\Dialog::class,
            Components\Dropdown::class,
            Components\Dynamic::class,
            Components\DynamicHtml::class,
            Components\Errors::class,
            Components\Event::class,
            Components\Flash::class,
            Components\Form::class,
            Components\Lazy::class,
            Components\Link::class,
            Components\Modal::class,
            Components\ModalWrapper::class,
            Components\Outside::class,
            Components\PreloadedModal::class,
            Components\Rehydrate::class,
            Components\Script::class,
            Components\Slot::class,
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
            Browser::macro($macroName, function ($selectName, $value = ''): Browser {
                /** @var Browser browser */
                $browser = $this;

                Collection::wrap($value)->each(function ($value) use ($selectName, $browser) {
                    $choicesSelector = Str::startsWith($selectName, '@')
                    ? '[dusk="' . explode('@', $selectName)[1] . '"]'
                    : 'div.choices__inner[data-select-name="' . $selectName . '"]';

                    $formattedChoicesSelector = $browser->resolver->format($choicesSelector);

                    $dataType = $browser->script("return document.querySelector('{$formattedChoicesSelector}').parentNode.getAttribute('data-type');")[0] ?? 'select-one';

                    $browser
                        ->click(
                            $dataType === 'select-multiple' ? "{$choicesSelector} input" : $choicesSelector
                        )
                        ->whenAvailable('div.choices.is-open', function (Browser $browser) use ($value, $formattedChoicesSelector, $dataType) {
                            $value = $value ? addslashes($value) : $value;

                            $selector = $value
                                ? "div.choices__item[data-value='{$value}']"
                                : 'div.choices__item[data-value]:not(.choices__placeholder)';

                            $browser->pause(100)->click($selector)->pause(100);

                            if ($dataType === 'select-multiple') {
                                $browser->script("return document.querySelector('{$formattedChoicesSelector}').dispatchEvent(new Event('hideDropdownFromDusk'));");
                                $browser->pause(100);
                            }
                        })
                        ->waitUntilMissing("div.choices.is-open[data-type='{$dataType}']");
                });

                return $browser;
            });
        }

        if ($macroName = config('splade.dusk.choices_remove_item_macro')) {
            Browser::macro($macroName, function ($selectName, $value = ''): Browser {
                /** @var Browser browser */
                $browser = $this;

                $choicesSelector = Str::startsWith($selectName, '@')
                    ? '[dusk="' . explode('@', $selectName)[1] . '"]'
                    : 'div.choices__inner[data-select-name="' . $selectName . '"]';

                return $browser
                    ->within("{$choicesSelector} div.choices__list", function (Browser $browser) use ($value) {
                        Collection::wrap($value)->each(function ($value) use ($browser) {
                            $value = $value ? addslashes($value) : $value;

                            $selector = $value
                                ? "div.choices__item[data-value='{$value}'] button"
                                : 'div.choices__item button';

                            $browser->click($selector)->waitUntilMissing($selector);
                        });
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

        ComponentAttributeBag::macro('rejectWhenBlank', function ($attributes) {
            /** @var ComponentAttributeBag $this */
            $attributes = Form::splitByComma($attributes);

            return $this->filter(function ($value, $key) use ($attributes) {
                if (in_array($key, $attributes) && blank($value)) {
                    return false;
                }

                return true;
            });
        });

        ComponentAttributeBag::macro('mergeVueBinding', function ($attribute, $value, bool $omitBlankValue = true, bool $escape = true) {
            /** @var ComponentAttributeBag $this */
            if ($omitBlankValue && blank($value)) {
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

            return $this->unless($this->has($shortBindAttribute) || $this->has($fullBindAttribute), function () use ($fullBindAttribute, $value, $escape) {
                if (is_bool($value)) {
                    $value = $value ? 'true' : 'false';
                }

                /** @var ComponentAttributeBag $this */
                return $this->merge([$fullBindAttribute => $value], $escape);
            });
        });
    }

    /**
     * Registers a route that's used to handle public methods
     * from interactive components from the frontend.
     *
     * @return void
     */
    private function registerMacroForBridgeComponent()
    {
        Route::macro('spladeWithVueBridge', function () {
            Route::post(config('splade.with_vue_bridge_route'), ComponentController::class)->name('splade.withVueBridge');
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
        Route::get(config('splade.event_redirect_route'), EventRedirectController::class)
            ->name('splade.eventRedirect')
            ->middleware(ValidateSignature::class);
    }

    /**
     * Registers a route that's used to confirm a user's password.
     *
     * @return void
     */
    private function registerMacroForPasswordConfirmation()
    {
        Route::macro('spladePasswordConfirmation', function () {
            Route::get(config('splade.confirm_password_route'), [ConfirmPasswordController::class, 'show'])->name('splade.confirmedPasswordStatus');
            Route::post(config('splade.confirm_password_route'), [ConfirmPasswordController::class, 'store'])->name('splade.confirmPassword');
        });
    }

    /**
     * Registers a route macro that can be used to handle Table bulk actions and exports.
     *
     * @return void
     */
    private function registerMacroForFileUploads()
    {
        Route::macro('spladeUploads', function () {
            Route::post(config('splade.file_uploads.route'), [FileUploadController::class, 'store'])->name('splade.fileUpload.store');
            Route::delete(config('splade.file_uploads.route'), [FileUploadController::class, 'delete'])->name('splade.fileUpload.delete');
        });
    }

    /**
     * Registers a route macro that can be used to handle Table bulk actions and exports.
     *
     * @return void
     */
    private function registerMacroForTableRoutes()
    {
        Route::macro('spladeTable', function () {
            Route::post(config('splade.table_bulk_action_route'), TableBulkActionController::class)
                ->name('splade.table.bulkAction')
                ->middleware(ValidateSignature::class);

            Route::get(config('splade.table_export_route'), TableExportController::class)
                ->name('splade.table.export')
                ->middleware(ValidateSignature::class);
        });
    }

    /**
     * Registers a route macro that can be used to ignore the response by the Splade Middleware.
     *
     * @return void
     */
    private function registerResponseMacro()
    {
        Response::macro('skipSpladeMiddleware', function () {
            $this->headers->set(SpladeCore::HEADER_SKIP_MIDDLEWARE, true);

            return $this;
        });
    }

    private function registerRequestMacros()
    {
        FormRequest::macro('clearConvertedFiles', function () {
            /** @var FormRequest $this */
            $this->convertedFiles = null;
        });

        Request::macro('orderedSpladeFileUploads', function ($key) {
            $existingKey = $key . File::getSuffixForExistingFiles();
            $orderKey    = $key . File::getSuffixForUploadOrder();

            /** @var Request $this */
            $newFiles = Collection::wrap($this->file($key, []));

            // If the order key is present, we assume that the key is a 'multiple' field.
            // Otherwise, we assume that the key is a 'single' field.
            $isMultipleField = $this->filled($orderKey);

            $existingFiles = Collection::wrap(
                $isMultipleField ? $this->collect($existingKey) : $this->input($existingKey)
            )->keyBy->getIdentifier();

            $keys = $isMultipleField
                ? $this->collect($orderKey, [])
                : Collection::make(['new-file-0', 'existing-file-' . $existingFiles->keys()->first()]);

            return $keys->map(function (string $uploadId) use ($newFiles, $existingFiles) {
                if (Str::startsWith($uploadId, 'new-file-')) {
                    return $newFiles->get(Str::after($uploadId, 'new-file-'));
                }

                if (Str::startsWith($uploadId, 'existing-file-')) {
                    return $existingFiles->get(Str::after($uploadId, 'existing-file-'));
                }
            })->filter()->values()->mapInto(SpladeFile::class);
        });
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
                name: 'slide-left',
                enter: 'transform transform ease-in-out duration-300',
                enterFrom: 'opacity-0 -translate-x-full',
                enterTo: 'opacity-100 translate-x-0',
                leave: 'transform transform ease-in-out duration-300',
                leaveFrom: 'opacity-100 translate-x-0',
                leaveTo: 'opacity-0 -translate-x-full',
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
