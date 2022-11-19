# Changelog

All notable changes to `laravel-splade` will be documented in this file.

## 0.7.6.1 - 2022-11-19

- Added `splade:show-versions` Artisan command

## 0.7.6 - 2022-11-16

- FilePond integration with support for:
- - Drag-and-drop uploads
- 
- - Image previews
- 
- - Async uploads
- 
- - File type validation
- 
- - File size validation
- 
- - Image validation
- 
- 

## 0.7.5 - 2022-11-15

- Table Component: resolve row links after the resource has been loaded

## 0.7.4 - 2022-11-15

- Preserves the default `perPage` pagination value in the `perPage` selector.
- Added `build()` helper method to dedicated tables.
- Added MySQL, PostgreSQL and SQLite to the test matrix.
- DB performance improvements in SpladeTable wildcard searches.

## 0.7.3 - 2022-11-15

- Added helper methods to sort the Table Resource in descending order
- Table component fix for Select Filter with numeric keys
- Choices.js fix for selecting a default value

## 0.7.2 - 2022-11-14

- Support for pre-loaded modals/slideovers

## 0.7.1 - 2022-11-03

- Support remote options in Form Select component
- Choices.js placeholder and styling improvements
- Improved Dusk macros for selecting Choices.js options
- The Dusk suite now checks whether the websockets server is running

## 0.6.13 - 2022-10-31

- Fix for closing the Choices.js dropdown when rendered in a Headless UI Modal

## 0.6.12 - 2022-10-31

- Support for nested relationships in Form Components

## 0.6.11 - 2022-10-26

- Escape meta tag values

## 0.6.10 - 2022-10-26

- Axios fix

## 0.6.9 - 2022-10-25

- Improved SEO handling with support for Open Graph and Twitter meta tags, Canonical URL, and separate configuration file.

## 0.6.8 - 2022-10-23

- Support for external domains in the Link component

## 0.6.7 - 2022-10-23

- Splade Middleware refactor

## 0.6.6 - 2022-10-23

- Support for external redirects (automatic and explicit via `Splade::redirectAway()`)
- With a Date-range Form Input component, only update the internal Vue model when both dates are selected

## 0.6.5 - 2022-10-20

- Checkbox value fix
- Revert fix for micro-optimization on view events (https://github.com/laravel/framework/pull/44653)

## 0.6.4 - 2022-10-20

- Choices.js fix for default array values
- Improved Dusk macro for Choices.js

## 0.6.3 - 2022-10-18

- Modal/slideover size tests + styling bugfix

## 0.6.2 - 2022-10-17

- Form `submit-on-change` attribute
- `@preserveScroll` directive
- Form `stay` now also ignores responses that don't redirect back
- Additional test for using form components with `v-model` instead of a `name` attribute

## 0.6.1 - 2022-10-14

- Added test + fix for form method spoofing

## 0.6.0 - 2022-10-14

- Built-in Query Builder for Table component
- Optional *custom* cell component in addition to the existing directive (`@cell`)
- Support for Table objects so you can reuse table configurations
- Support for Bulk Actions (requires a table object)
- Support for Exports (requires a table object)
- `make:table` Command
- Support for Modal/Slideover as Table RowLink
- Bugfix for #74

## 0.5.12 - 2022-10-07

- Added 'scrollToError' form prop

## 0.5.11 - 2022-10-06

- When the `keep-alive` component is used, the Dialog component will now be hidden when the user navigates to another page

## 0.5.10 - 2022-10-06

- You may disable the paginator when the resource only contains one page (`SpladeTable::hidesPaginationWhenResourceContainsOnePage()`)
- On validation errors, the Form component scrolls to the first element with an error. You may disable this with the `scrollOnError` prop.

## 0.5.9 - 2022-10-05

- The debounce value of the Table component is now configurable.
- You may now pass a value to the Defer component that it will watch and perform a request whenever the value changes (with an optional debounce).
- The Defer component now has a `manual` attribute to prevent it from loading after mounting.
- The Dropdown component now has a `teleport` attribute to indicate whether it should be attached to the body.

## 0.5.8 - 2022-10-04

- The default *confirm* texts are now translated by default

## 0.5.7 - 2022-10-04

- Dropdowns are now rendered using portals, for example, so that they are rendered outside of tables to prevent overflow issues
- Support for inline dropdowns
- Custom Table cell regex bugfix

## 0.5.6 - 2022-10-03

- Support for rendering the Table component with auto-fill, but without the `thead` element
- Improved Choices.js compatibility in the Select component
- Improved support for registering multiple custom Vue components at once
- File Input component UI fixes
- Table component UI fixes

## 0.5.5 - 2022-09-27

- Fix for wrong `poll` type in Defer component
- Support for setting the 'per-page' options globally or disable it (Table component)
- Support for defining the Toast message in the style/position method - `Toast::danger('Whoops!')`
- SpladeMiddleware and ServiceProvider refactor
- Added tons of docblocks and comments in the codebase

## 0.5.4 - 2022-09-25

Added docblocks + refactor

## 0.5.3 - 2022-09-23

- Fix for lazy components without placeholder

## 0.5.2 - 2022-09-23

- Better Toast TX
- Improved styling of fixed elements

## 0.5.1 - 2022-09-23

- Middleware refactor to make sure [HTTP Tests](https://laravel.com/docs/9.x/http-tests) still work.

## 0.5.0 - 2022-09-22

- Lazy Loading
- Teleport
- Transitions
- Persistent Layout

## 0.4.25 - 2022-09-15

- Table responsive UI fixes

## 0.4.24 - 2022-09-15

- The wrapper around the Table component can now be styled with classes
- Ability to disable 'toggleable' Table columns by default
- Ability to disable Choices.js/Flatpickr on specific elements while it's enabled globally
- Fix for binding the form `submit` method to a `v-on:change` attribute

## 0.4.23 - 2022-09-14

- The `$__env` variable is now available to custom cells when using the Table component

## 0.4.22 - 2022-09-12

- New `checkboxes` and `radios` components
- Some small refactors

## 0.4.21 - 2022-09-09

- Render `action` attribute on Form component

## 0.4.20 - 2022-09-09

- Workaround for selected options in SSR render

## 0.4.19 - 2022-09-09

- Fixed Input component styling issue
- The Form component now always has a `method` attribute
- Improved Choices.js and Flatpickr bindings for SSR

## 0.4.18 - 2022-09-08

- Styling fixes for a disabled Form Input component
- Fix for nested data with FormData

## 0.4.17 - 2022-09-07

- Always use FormData when sending forms

## 0.4.16 - 2022-09-07

Revert a7c2919 because it breaks unfilled checkboxes

## 0.4.15 - 2022-09-07

Bugfix

## 0.4.14 - 2022-09-07

- Support for Eloquent relationships with the Form Checkbox component
- Support for submitting a form without an event object
- Fix for binding nested data

## 0.4.13 - 2022-09-05

- Fix for NProgress import in dev build

## 0.4.12 - 2022-09-02

- Fix for #33

## 0.4.11 - 2022-09-02

- Progress bar
- More versatile dropdown component
- Default transition animation in the button dropdown
- Dropdown component now closes on escape keypress
- Transition component (internal only, might open up at some point)
- Refactored the Splade installer to prepare for the Breeze starter-kit

## 0.4.10 - 2022-08-31

- Prepare Splade installer for Breeze starter-kit
- Fix for not showing the bound values when using Choices.js and Flatpickr

## 0.4.9 - 2022-08-25

- Styling issues fixed

## 0.4.8 - 2022-08-25

- Support for `name` and `value` attributes in the Submit component
- Styling fixes
- Ignore `StreamedResponse` in Splade middleware
- Additional tests for nested data

## 0.4.7 - 2022-08-24

- Simplified redirects

## 0.4.6 - 2022-08-24

- Prepare form help texts

## 0.4.5 - 2022-08-24

- Fix for undefined checkboxes
- Fix for form elements without a `name` attribute
- Cleaner submit component

## 0.4.3 - 2022-08-24

- Better handling of undefined data in the Form Component
- Exclude binary file responses from the Splade middleware

## 0.4.2 - 2022-08-22

- Middleware fix for resolving validation errors
- Disable the form fields when processing

## 0.4.1 - 2022-08-22

Cleanup

## 0.4.0 - 2022-08-22

- [Form Components](https://splade.dev/docs/form-overview) to rapidly build forms. It supports model binding and validation, includes default styling, and is still fully customizable! It integrates with [Autosize](https://www.jacklmoore.com/autosize/) to automatically adjust textarea height, [Choices.js](https://github.com/Choices-js/Choices) to make selects searchable and taggable, and [Flatpickr](https://flatpickr.js.org) to provide a powerful datetime picker.
- Default data passed to `<x-form>` now requires the `unguarded` attribute when binding an Eloquent Model or Fluent instance. This is not necessairy when using the new Form Components.

## 0.3.1 - 2022-08-12

Bump npm package

## 0.3.0 - 2022-08-12

- [Table component](https://splade.dev/docs/table-overview) with support auto-fill, searching, filtering, sorting, toggling columns, and pagination.

## 0.2.2 - 2022-08-02

- Fixed automatic installer on Windows (#18) and added Windows to GitHub Actions.
- Removed Tailwind classes in Vue components (#26)

## 0.2.1 - 2022-07-29

- Default close button for Modal and Slideover components (#14)
- Fix for rendering classes on the Form component (#17)

## 0.2.0 - 2022-07-28

- Support for [Server-side rendering (SSR)](https://splade.dev/docs/ssr).
- Support for [title and meta tags](https://splade.dev/docs/title-meta).
- Migrated `SpladeCore.vue` to `Splade.js` to prevent mulitple Vue instances.

## 0.1.2 - 2022-07-25

- Fix `processing` prop in Form component (#11)
- Fix `request` prop in Defer component (#9)
- Fix for remembered data when using default data (#10)
- Fix for validation errors in Modal component (#7)

## 0.1.1 - 2022-07-22

Dep fix

## 0.1.0 - 2022-07-22

Initial relase
