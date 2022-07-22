@extends('layout')

@section('content')

FormJson

<x-splade-form :default="json_encode(['name' => 'Splade'])">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection