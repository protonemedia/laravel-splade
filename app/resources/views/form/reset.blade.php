@extends('layout')

@section('content')

FormReset

<x-splade-form
    reset-on-success
    :action="route('form.back.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
    <p v-if="form.wasSuccessful">Success!</p>
</x-splade-form>

@endsection