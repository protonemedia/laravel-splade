@extends('layout')

@section('content')

FormDefault

<x-splade-form default="{name: 'Splade'}">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection