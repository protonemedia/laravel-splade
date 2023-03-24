@extends('layout')

@section('content')

ModalComponent

<div class="flex space-x-3">
    <Link modal dusk="one" href="{{ route('modal.one') }}">Open Modal One</Link>
    <Link slideover dusk="slideover" href="{{ route('modal.slideover') }}">Open Modal Slideover</Link>
    <Link slideover dusk="slideover-left" href="{{ route('modal.slideover', ['left' => 1]) }}">Open Modal Slideover Left</Link>
    <Link modal dusk="validation" href="{{ route('modal.validation') }}">Open Modal Validation</Link>
    <Link modal dusk="keep" href="{{ route('modal.keep') }}">Open Modal and Keep</Link>
    <Link modal dusk="libraries" href="{{ route('form.components.libraries') }}">Open Form Libraries</Link>
    <Link modal dusk="form-select" href="{{ route('form.components.customSelectOptions') }}">Open Custom Select Options</Link>
    <Link modal dusk="one-close-explicitly" href="{{ route('modal.one', ['closeExplicitly' => 1]) }}">Open Modal One (Close Explicitly)</Link>
</div>

<div class="flex space-x-3">
    <Link modal dusk="modal-size-sm" href="/modal/size/sm">Modal sm</Link>
    <Link modal dusk="modal-size-md" href="/modal/size/md">Modal md</Link>
    <Link modal dusk="modal-size-lg" href="/modal/size/lg">Modal lg</Link>
    <Link modal dusk="modal-size-xl" href="/modal/size/xl">Modal xl</Link>
    <Link modal dusk="modal-size-2xl" href="/modal/size/2xl">Modal 2xl</Link>
    <Link modal dusk="modal-size-3xl" href="/modal/size/3xl">Modal 3xl</Link>
    <Link modal dusk="modal-size-4xl" href="/modal/size/4xl">Modal 4xl</Link>
    <Link modal dusk="modal-size-5xl" href="/modal/size/5xl">Modal 5xl</Link>
    <Link modal dusk="modal-size-6xl" href="/modal/size/6xl">Modal 6xl</Link>
    <Link modal dusk="modal-size-7xl" href="/modal/size/7xl">Modal 7xl</Link>
</div>

<div class="flex space-x-3">
    <Link slideover dusk="slideover-size-sm" href="/modal/size/sm">Slideover sm</Link>
    <Link slideover dusk="slideover-size-md" href="/modal/size/md">Slideover md</Link>
    <Link slideover dusk="slideover-size-lg" href="/modal/size/lg">Slideover lg</Link>
    <Link slideover dusk="slideover-size-xl" href="/modal/size/xl">Slideover xl</Link>
    <Link slideover dusk="slideover-size-2xl" href="/modal/size/2xl">Slideover 2xl</Link>
    <Link slideover dusk="slideover-size-3xl" href="/modal/size/3xl">Slideover 3xl</Link>
    <Link slideover dusk="slideover-size-4xl" href="/modal/size/4xl">Slideover 4xl</Link>
    <Link slideover dusk="slideover-size-5xl" href="/modal/size/5xl">Slideover 5xl</Link>
    <Link slideover dusk="slideover-size-6xl" href="/modal/size/6xl">Slideover 6xl</Link>
    <Link slideover dusk="slideover-size-7xl" href="/modal/size/7xl">Slideover 7xl</Link>
</div>

<div class="flex space-x-3">
    <Link dusk="menu-modal" href="#menu-modal">Preloaded modal</Link>
    <Link dusk="menu-slideover" href="#menu-slideover">Preloaded slideover</Link>
    <Link dusk="menu-modal-large" href="#menu-modal-large">Preloaded modal (large, close explicitly)</Link>
    <Link dusk="menu-slideover-large" href="#menu-slideover-large">Preloaded slideover (large)</Link>
</div>

<x-splade-modal name="menu-modal" modal>
    <h1>Check out my modal!</h1>
</x-splade-modal>

<x-splade-modal name="menu-slideover" slideover>
    <h1>Check out my slideover!</h1>
</x-splade-modal>

<x-splade-modal name="menu-modal-large" modal max-width="7xl" close-explicitly>
    <h1>Check out my modal!</h1>
</x-splade-modal>

<x-splade-modal name="menu-slideover-large" slideover max-width="7xl">
    <h1>Check out my slideover!</h1>
</x-splade-modal>

@endsection