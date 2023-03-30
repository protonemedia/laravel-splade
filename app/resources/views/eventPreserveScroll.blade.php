@extends('layout')

@section('content')

EventComponent

<p>{{ auth()->user()->name }}</p>

<x-splade-event private channel="Splade" listen="RefreshEvent" preserve-scroll>
    <p v-if="subscribed">Subscribed!</p>

    <x-splade-data default="{ number: 1 }">
        <p dusk="counter" v-text="data.number" />
        <button dusk="increase" @click.prevent="data.number++">Increase</button>
    </x-splade-data>
</x-splade-event>

<div class="h-screen w-80 bg-red-100" />

@endsection