@extends('layout')

@section('content')

FormProcessing

<x-splade-form :action="route('form.slow.submit')" stay>
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
    <p v-if="form.processing">Form is processing</p>
    <p v-if="form.wasSuccessful">Form was successful</p>
    <p v-if="form.recentlySuccessful">Form recently successful</p>
</x-splade-form>

@endsection