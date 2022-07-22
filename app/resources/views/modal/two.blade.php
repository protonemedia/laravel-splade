@extends('layout')

@section('content')

<x-splade-modal>
    ModalComponentTwo

    <button @click.prevent="modal.close" dusk="close-two">Close</button>
</x-splade-modal>

@endsection