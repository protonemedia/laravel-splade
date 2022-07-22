@extends('layout')

@section('content')

ToggleMultipleDefaults

<x-splade-toggle :data="['one' => true, 'two' => false]">
    <p v-if="one">IsToggledOne</p>
    <p v-if="!one">IsNotToggledOne</p>

    <p v-if="two">IsToggledTwo</p>
    <p v-if="!two">IsNotToggledTwo</p>
</x-splade-toggle>

@endsection