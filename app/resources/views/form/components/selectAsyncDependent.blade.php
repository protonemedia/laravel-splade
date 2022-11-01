@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4">
        <x-splade-select choices dusk="country" name="country" remote-url="/api/countries/keyValue" />
        <x-splade-select choices dusk="province" name="province" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}`" />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection