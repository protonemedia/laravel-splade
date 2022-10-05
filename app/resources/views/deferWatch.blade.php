@extends('layout')

@section('content')

ComponentDefer

@php
    \Illuminate\Support\Facades\Cache::put('deferPoll', 0)
@endphp

<x-splade-form default="{ name: 'initial' }">
    <x-splade-defer
        url="/defer/poll"
        method="post"
        watch-value="form.$all"
        manual
    >
        <input dusk="name" v-model="form.name" />
        <p v-if="processing">Loading...</p>
        <p dusk="response" v-if="response" v-text="response" />
    </x-splade-defer>
</x-splade-form>

@endsection