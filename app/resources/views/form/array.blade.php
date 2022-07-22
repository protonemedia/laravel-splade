@extends('layout')

@section('content')

FormArray

<x-splade-form :default="['name' => 'Splade']">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection