@extends('layout')

@section('content')

ComponentDeferUrl

<x-splade-form>
    <input dusk="name" v-model="form.name" />

    <x-splade-defer
        url="`/defer/input/${form.name}`"
        watch-value="form.name"
        watch-debounce="100"
        manual
    >
        <p dusk="response" v-if="response" v-text="response" />
    </x-splade-defer>
</x-splade-form>

@endsection