@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4">
        <h1>Regular</h1>
        <x-splade-select name="country" remote-url="/api/countries/keyValue" />
        <x-splade-select name="country" remote-url="/api/countries/keyValue" choices />
        <x-splade-select name="country" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" />
        <x-splade-select name="country" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" choices />

        <h1>Regular + placeholder</h1>
        <x-splade-select placeholder name="country" remote-url="/api/countries/keyValue" />
        <x-splade-select placeholder name="country" remote-url="/api/countries/keyValue" choices />
        <x-splade-select placeholder name="country" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" />
        <x-splade-select placeholder name="country" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" choices />

        <h1>Multiple</h1>
        <x-splade-select multiple name="countries[]" remote-url="/api/countries/keyValue" />
        <x-splade-select multiple name="countries[]" remote-url="/api/countries/keyValue" choices />
        <x-splade-select multiple name="countries[]" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" />
        <x-splade-select multiple name="countries[]" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" choices />

        <h1>Multiple + placeholder</h1>
        <x-splade-select multiple placeholder name="countries[]" remote-url="/api/countries/keyValue" />
        <x-splade-select multiple placeholder name="countries[]" remote-url="/api/countries/keyValue" choices />
        <x-splade-select multiple placeholder name="countries[]" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" />
        <x-splade-select multiple placeholder name="countries[]" remote-url="/api/countries/objects" remote-value="alpha-2" remote-label="name" choices />
    </x-splade-form>
</div>

@endsection