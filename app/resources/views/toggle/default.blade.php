@extends('layout')

@section('content')

ToggleDefault

<x-splade-toggle :data="true">
    <p v-if="toggled">IsToggled</p>
    <p v-if="!toggled">IsNotToggled</p>
</x-splade-toggle>

@endsection