@extends('layout')

@section('content')

FormReset

<x-splade-form
    stay
    reset-on-success
    :action="route('form.simple.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
    <p v-if="form.wasSuccessful">Success!</p>
</x-splade-form>

@endsection