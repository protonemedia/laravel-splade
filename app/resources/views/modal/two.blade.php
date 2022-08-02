@extends('layout')

@section('content')

<x-splade-modal :close-button="false">
    ModalComponentTwo

    <button @click.prevent="modal.close" dusk="close-two">Close</button>
</x-splade-modal>

@endsection