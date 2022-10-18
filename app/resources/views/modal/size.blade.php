@extends('layout')

@section('content')

<x-splade-modal max-width="{{ $size }}">
    ModalSize {{ $size }}

    <p v-text="modal.maxWidth" />

    <button @click.prevent="modal.close" dusk="close-one">Close</button>
</x-splade-modal>

@endsection