@extends('layout')

@section('content')

FormGet

<x-splade-form :action="route('form.get.submit')" method="get" class="form-get">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection