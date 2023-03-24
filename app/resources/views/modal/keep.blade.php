@extends('layout')

@section('content')

<x-splade-modal>
    ModalComponentKeep

    <x-splade-form method="GET" :action="route('modal.keep')" keep-modal>
        <input v-model="form.name" dusk="name" />
        <p v-text="form.errors.name" />
        <button type="submit">Submit</button>
    </x-splade-form>

    @if($name = request()->query('name'))
        <p>From Query String: {{ $name }}</p>
    @endif
</x-splade-modal>

@endsection