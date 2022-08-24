@extends('layout')

@section('content')

FormRestore

<x-splade-form
    stay
    restore-on-success
    :action="route('form.back.submit')"
    :default="['name' => 'Pascal']">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
    <p v-if="form.wasSuccessful">Success!</p>
</x-splade-form>

@endsection