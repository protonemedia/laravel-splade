@extends('layout')

@section('content')

EventComponent

<p>{{ auth()->user()->name }}</p>

<x-splade-event private channel="Splade" listen="RedirectEvent, RefreshEvent, RefreshPreserveScrollEvent, SimpleEvent, ToastEvent">
    <p v-if="subscribed">Subscribed!</p>

    <x-splade-data default="{ number: 1 }">
        <p dusk="counter" v-text="data.number" />
        <button dusk="increase" @click.prevent="data.number++">Increase</button>
    </x-splade-data>

    <div v-for="event in events">
        <p dusk="name" v-text="event.name" />
        <p dusk="username" v-text="event.data.username" />
    </div>
</x-splade-event>

<br>

<Link modal dusk="open-modal" href="{{ route('modal.one') }}">Open Modal One</Link>

<div class="h-screen w-80 bg-red-100" />

@endsection