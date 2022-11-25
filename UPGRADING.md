# Upgrade Guide

## From v0.x to v1.0

If you've published the vendor Blade templates in v0.x, they all ended up in `/resources/views/vendor/splade`. Starting with v1.0, the templates are being published in that folder but are split into a `components` and `functional` subfolder. The `functional` folder won't be published as there's nothing to customize. Check out the [default repository](https://github.com/protonemedia/laravel-splade/tree/main/resources/views) to see the new grouping of the templates.

## To v0.4

* Default data passed to `<x-form>` now requires the `unguarded` attribute when binding an Eloquent Model or Fluent instance. This is not necessary when using the new Form Components.
* The new Form Components come with Choices.js and Flatpickr integrations. Splade now comes with a default stylesheet to give the libraries some basic styling. This is completely optional, but you probably want to import this default stylesheet into your main JavaScript file:

```js
import "@protonemedia/laravel-splade/dist/style.css";

import { createApp } from "vue";

...
```

## To v0.2

* There's a new Blade `@spladeHead` directive to support title and meta tags. You may add this directive to your root template.
* Splade now supports SSR. This is optional, so you may follow the [manual installation guide](https://splade.dev/docs/ssr) to set up SSR.
* The new SSR feature includes a *Blade Fallback* option, which is enabled by default. You may disable it in the `splade.php` configuration file.
