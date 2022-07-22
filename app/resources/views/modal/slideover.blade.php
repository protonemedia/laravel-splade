@extends('layout')

@section('content')

<x-splade-modal>
    ModalComponentSlideover

    <Link modal dusk="one-from-slideover" href="{{ route('modal.one') }}">Open Modal One</Link>

    <button @click.prevent="modal.close" dusk="close-slideover">Close</button>
</x-splade-modal>

@endsection