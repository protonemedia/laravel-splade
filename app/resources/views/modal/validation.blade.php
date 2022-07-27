@extends('layout')

@section('content')

<x-splade-modal>
    ModalComponentValidation

    <x-splade-form :action="route('form.simple.submit')">
        <input v-model="form.name" dusk="name" />
        <p v-text="form.errors.name" />
        <button type="submit">Submit</button>
    </x-splade-form>
</x-splade-modal>

@endsection