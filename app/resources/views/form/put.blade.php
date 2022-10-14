@extends('layout')

@section('content')

FormPut

<x-splade-form method="PUT">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection