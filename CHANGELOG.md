# Changelog

All notable changes to `laravel-splade` will be documented in this file.

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
