<?php

namespace App\Providers;

use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        app()->singleton('countries', function () {
            return Collection::make(
                json_decode(file_get_contents(resource_path('iso3166.json')))
            );
        });

        app()->singleton('countries.keyValue', function () {
            return app('countries')->pluck('name', 'alpha-2')->all();
        });
    }
}
