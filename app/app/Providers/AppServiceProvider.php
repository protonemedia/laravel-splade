<?php

namespace App\Providers;

use Illuminate\Auth\Events\Login;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Event;
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
        Event::listen(Login::class, function () {
            session()->remove('auth.password_confirmed_at');
        });

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
