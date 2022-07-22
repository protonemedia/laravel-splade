@extends('layout')

@section('content')

EventComponent

<p>{{ auth()->user()->name }}</p>

<x-splade-event private channel="Splade" listen="RedirectEvent, RefreshEvent, SimpleEvent, ToastEvent">
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

@endsection