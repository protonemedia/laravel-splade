@extends('layout')

@section('content')

DataDefault

<x-splade-data default="{ name: 'Splade', is_project: true }">
    <input v-model="data.name" name="name" />
    <input v-model="data.is_project" name="is_project" type="checkbox" />

    <p dusk="text" v-text="data.name" />
    <p dusk="project" v-if="data.is_project">Is Project!</p>
</x-splade-data>

@endsection