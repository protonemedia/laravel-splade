@extends('layout')

@section('content')

RehydrateTwice

<p>Static: <span id="static" dusk="static">{{ now() }}</span></p>

<x-splade-rehydrate on="reload">
    <p>Dynamic 1: <span dusk="dynamic-1">{{ Str::random() }}</span></p>
</x-splade-rehydrate>

<x-splade-rehydrate on="reload">
    <p>Dynamic 2: <span dusk="dynamic-2">{{ Str::random() }}</span></p>
</x-splade-rehydrate>

<button dusk="reload" @click.prevent="$splade.emit('reload')">Reload</button>

@endsection