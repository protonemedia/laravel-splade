@extends('layout')

@section('content')

FormSimple

<x-splade-form class="form-simple">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection