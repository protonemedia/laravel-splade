@extends('layout')

@section('content')

ToggleSingle

<x-splade-toggle>
    <p v-if="toggled">IsToggled</p>
    <p v-if="!toggled">IsNotToggled</p>
    <div><button dusk="toggle" @click.prevent="toggle">Toggle</button></div>
    <div><button dusk="toggle-on" @click.prevent="setToggle(true)">Toggle on</button></div>
    <div><button dusk="toggle-off" @click.prevent="setToggle(false)">Toggle off</button></div>
</x-splade-toggle>

@endsection