@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :action="route('form.components.selectAsync')" class="space-y-4">
        <h1>Regular</h1>
        <x-splade-select dusk="country_a" name="country_a" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" />
        <x-splade-select dusk="country_b" name="country_b" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" choices />

        <h1>Regular + placeholder</h1>
        <x-splade-select placeholder dusk="country_c" name="country_c" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" />
        <x-splade-select placeholder dusk="country_d" name="country_d" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" choices />

        <h1>Multiple</h1>
        <x-splade-select multiple dusk="countries_a" name="countries_a[]" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" />
        <x-splade-select multiple dusk="countries_b" name="countries_b[]" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" choices />

        <h1>Multiple + placeholder</h1>
        <x-splade-select multiple placeholder dusk="countries_c" name="countries_c[]" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" />
        <x-splade-select multiple placeholder dusk="countries_d" name="countries_d[]" remote-url="/api/countries/objects" option-value="alpha-2" option-label="name" choices />

        <x-splade-submit />

        <div id="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection