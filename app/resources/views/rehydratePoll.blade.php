@extends('layout')

@section('content')

RehydratePoll

<p>Static: <span id="static" dusk="static">{{ now() }}</span></p>

<x-splade-rehydrate poll="1000">
    <x-slot:placeholder> <p> Reloading... </p> </x-slot:placeholder>

    <p>Dynamic: <span dusk="dynamic">{{ Str::random() }}</span></p>
</x-splade-rehydrate>

@endsection