@extends('layout')

@section('content')

<x-splade-modal :close-explicitly="$closeExplicitly">
    ModalComponentOne

    <Link modal dusk="two" href="{{ route('modal.two') }}">Open Modal Two</Link>
    <Link slideover dusk="slideover-from-one" href="{{ route('modal.slideover') }}">Open Modal Slideover</Link>
    <Link href="#preloaded">Preloaded modal</Link>

    <button @click.prevent="modal.close" dusk="close-one">Close</button>

    <x-splade-modal name="preloaded">
        <h1>Check out my preloaded modal!</h1>
    </x-splade-modal>
</x-splade-modal>

@endsection