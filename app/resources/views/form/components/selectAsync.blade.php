@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4">
        {{-- <x-splade-select name="country" dynamic-url="`/api/countries/keyValue`" /> --}}
        {{-- <x-splade-select name="country" dynamic-url="`/api/countries/keyValue`" choices /> --}}

        <x-splade-select name="country" dynamic-url="`/api/countries/objects`" url-value="alpha-2" url-label="name" />
        {{-- <x-splade-select name="country" dynamic-url="`/api/countries/objects`" choices /> --}}
    </x-splade-form>
</div>

@endsection