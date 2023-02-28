@extends('layout')

@section('content')

FormBackground

<x-splade-form dusk="form-background" action="/form/twoFields?redirect=1" submit-on-change background debounce="500">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />

    <input v-model="form.email" dusk="email" />
    <p v-text="form.errors.email" />

    <p v-if="form.processingInBackground">Form is processing</p>
    <p v-if="form.wasUnsuccessful">Form was unsuccessful</p>
    <p v-if="form.recentlyUnsuccessful">Form recently unsuccessful</p>
    <p v-if="form.wasSuccessful">Form was successful</p>
    <p v-if="form.recentlySuccessful">Form recently successful</p>

    <x-splade-submit />
</x-splade-form>

@endsection