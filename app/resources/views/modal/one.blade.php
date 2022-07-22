@extends('layout')

@section('content')

<x-splade-modal>
    ModalComponentOne

    <Link modal dusk="two" href="{{ route('modal.two') }}">Open Modal Two</Link>
    <Link slideover dusk="slideover-from-one" href="{{ route('modal.slideover') }}">Open Modal Slideover</Link>

    <button @click.prevent="modal.close" dusk="close-one">Close</button>
</x-splade-modal>

@endsection