@extends('layout')

@section('content')

LazyComponent

<h1>{{ $always }}</h1>
<h2>{{ $init }}</h2>

<x-splade-lazy attr1="1">
    <x-slot:placeholder>
        <p>Placeholder 1</p>
    </x-slot:placeholder>

    <h3>Lazy slot 1 : {{ $lazy['key'] }}</h3>
</x-splade-lazy>

<x-splade-lazy attr2="2">
    <x-slot:placeholder>
        <p>Placeholder 2</p>
    </x-slot:placeholder>

    <h4>Lazy slot 2 : {{ $lazy['key'] }}</h4>
</x-splade-lazy>

<x-splade-toggle>
    <button class="block" @click="toggle">Load notifications</button>

    <x-splade-lazy show="toggled" url="/lazy/notifications">
        <x-slot:placeholder>
            <p>Loading notifications...</p>
        </x-slot:placeholder>
    </x-splade-lazy>
</x-splade-toggle>

<x-splade-toggle>
    <button class="block" @click="toggle">Load time</button>

    <x-splade-lazy show="toggled">
        <x-slot:placeholder>
            <p>Want to see the time?</p>
        </x-slot:placeholder>

        <h5>{{ $time }}</h5>
    </x-splade-lazy>
</x-splade-toggle>

@endsection