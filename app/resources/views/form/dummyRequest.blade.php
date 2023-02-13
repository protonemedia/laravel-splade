@extends('layout')

@section('content')

FormDummyRequest

<x-splade-data>
    <x-splade-form
        confirm
        require-password
        action="#"
        @success="(response) => data.name = response.name"
    >
        <input v-model="form.name" dusk="name" />
        <button type="submit">Submit</button>
        <p v-text="data.name" dusk="data-name" />
    </x-splade-form>
</x-splade-data>

@endsection