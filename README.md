<img src="https://raw.githubusercontent.com/protonemedia/laravel-splade/main/logo.svg" />

# Laravel Splade

***The magic of Inertia.js with the simplicity of Blade.***

Splade provides a **super easy** way to build ***Single Page Applications*** (SPA) using standard **Laravel Blade** templates, enhanced with renderless **Vue 3** components. In essence, you can write your app using the simplicity of Blade, and besides that magic SPA-feeling, you can sparkle it to make it interactive. **All without ever leaving Blade.**

[![Latest Version on Packagist](https://img.shields.io/packagist/v/protonemedia/laravel-splade.svg)](https://packagist.org/packages/protonemedia/laravel-splade)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/protonemedia/laravel-splade/run-tests.yml?branch=main&label=tests)](https://github.com/protonemedia/laravel-splade/actions?query=workflow%3Arun-tests+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/protonemedia/laravel-splade.svg)](https://packagist.org/packages/protonemedia/laravel-splade)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/pascalbaljet)](https://github.com/sponsors/pascalbaljet)

## Sponsor Splade

❤️ We proudly support the community by developing Laravel packages and giving them away for free. If this package saves you time or if you're relying on it professionally, please consider [sponsoring the maintenance and development](https://github.com/sponsors/pascalbaljet). Keeping track of issues and pull requests takes time, but we're happy to help!

## Features

Splade gives you a massive head start when building applications. Navigate the documentation or watch the videos to discover its power, but to give you a glance, here's a short overview of some of the best features:

* Splade allows you to use the Laravel Blade template engine and build a single-page application using regular server-side routing without building an API. You still have the full power of Vue.js when you need it.
* Splade aims to stick as close as possible to the default Laravel features and development flow.
* Automatic installer and support for the Laravel Breeze starter kit.
* Besides the SPA navigation features, it has more than 20 interactive components that are huge timesavers.
* Most components are functional and unstyled, giving you complete control over the implementation.
* Other components are styled with Tailwind CSS 3.0, but can be fully customized by publishing the Blade templates. You don't need to rebuild or recompile *any* JavaScript for this.
* Built-in support for Modals and Slideover that can show any route or pre-loaded content.
* Beautiful Form Components with support for Validation and (Eloquent) Model binding. Built-in integration with Autosize, Choices.js, FilePond, and Flatpickr, including async file uploads.
* DataTables-like Table component that supports auto-fill, bulk actions, exports, searching, sorting, and more!
* Support Lazy Loading (templates and data), Persistent Layout, Animations, and Teleports.
* Laravel Echo integration to control browser behavior from the backend (redirecting, refreshing, and showing a toast).
* Built-in SEO (title, description, keywords) with support for Open Graph and Twitter tags.
* Support for custom Blade and Vue components.
* Support for existing Blade and Vue libraries.
* Support for SSR (server-side rendering).

## Discord, Documentation and Website

📖 You can find the documentation at [Splade.dev](https://splade.dev/) (and [here](https://github.com/protonemedia/laravel-splade-docs) its source code). You may also join the [Splade Discord server](https://discord.gg/qGJ4MkMQWm).

🌎 The website is also [open source](https://github.com/protonemedia/splade.dev), and built with Splade!

## Video

📺 Check out the [introduction video](https://www.youtube.com/watch?v=9V9BUHtvwXI), or [click here](https://www.youtube.com/playlist?list=PLmEkRPCduet8MPP_gFm_ETJ0m74hvXZWl) for the YouTube Playlist with all Splade videos.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Other Laravel packages

* [`Laravel Analytics Event Tracking`](https://github.com/protonemedia/laravel-analytics-event-tracking): Laravel package to easily send events to Google Analytics.
* [`Laravel Blade On Demand`](https://github.com/protonemedia/laravel-blade-on-demand): Laravel package to compile Blade templates in memory.
* [`Laravel Cross Eloquent Search`](https://github.com/protonemedia/laravel-cross-eloquent-search): Laravel package to search through multiple Eloquent models.
* [`Laravel Eloquent Scope as Select`](https://github.com/protonemedia/laravel-eloquent-scope-as-select): Stop duplicating your Eloquent query scopes and constraints in PHP. This package lets you re-use your query scopes and constraints by adding them as a subquery.
* [`Laravel Eloquent Where Not`](https://github.com/protonemedia/laravel-eloquent-where-not): This Laravel package allows you to flip/invert an Eloquent scope, or really any query constraint.
* [`Laravel Form Components`](https://github.com/protonemedia/laravel-form-components): Blade components to rapidly build forms with Tailwind CSS Custom Forms and Bootstrap 4. Supports validation, model binding, default values, translations, includes default vendor styling and fully customizable!
* [`Laravel MinIO Testing Tools`](https://github.com/protonemedia/laravel-minio-testing-tools): This package provides a trait to run your tests against a MinIO S3 server.
* [`Laravel Mixins`](https://github.com/protonemedia/laravel-mixins): A collection of Laravel goodies.
* [`Laravel Paddle`](https://github.com/protonemedia/laravel-paddle): Paddle.com API integration for Laravel with support for webhooks/events.
* [`Laravel Verify New Email`](https://github.com/protonemedia/laravel-verify-new-email): This package adds support for verifying new email addresses: when a user updates its email address, it won't replace the old one until the new one is verified.
* [`Laravel WebDAV`](https://github.com/protonemedia/laravel-webdav): WebDAV driver for Laravel's Filesystem.
* [`Laravel XSS Protection Middleware`](https://github.com/protonemedia/laravel-xss-protection): Laravel Middleware to protect your app against Cross-site scripting (XSS). It sanitizes request input by utilising the Laravel Security package, and it can sanatize Blade echo statements as well.

## Security

If you discover any security related issues, please email pascal@protone.media instead of using the issue tracker.

## Credits

- [Pascal Baljet](https://github.com/protonemedia)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
