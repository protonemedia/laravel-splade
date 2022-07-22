@extends('layout')

@section('content')

ToggleMultiple

<x-splade-toggle data="one, two">
    <p v-if="one">IsToggledOne</p>
    <p v-if="!one">IsNotToggledOne</p>
    <div><button dusk="toggle-one" @click.prevent="toggle('one')">Toggle</button></div>
    <div><button dusk="toggle-one-on" @click.prevent="setToggle('one', true)">Toggle on</button></div>
    <div><button dusk="toggle-one-off" @click.prevent="setToggle('one', false)">Toggle off</button></div>

    <hr />

    <p v-if="two">IsToggledTwo</p>
    <p v-if="!two">IsNotToggledTwo</p>
    <div><button dusk="toggle-two" @click.prevent="toggle('two')">Toggle</button></div>
    <div><button dusk="toggle-two-on" @click.prevent="setToggle('two', true)">Toggle on</button></div>
    <div><button dusk="toggle-two-off" @click.prevent="setToggle('two', false)">Toggle off</button></div>
</x-splade-toggle>

@endsection