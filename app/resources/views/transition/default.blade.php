@extends('layout')

@section('content')

@php
\ProtoneMedia\Splade\Facades\Animation::new(
    name: 'custom-demo',
    enter: 'transform transform ease-in-out duration-300',
    enterFrom: 'opacity-0 -translate-x-full',
    enterTo: 'opacity-100 translate-x-0',
    leave: 'transform transform ease-in-out duration-300',
    leaveFrom: 'opacity-100 translate-x-0',
    leaveTo: 'opacity-0 -translate-x-full',
);
@endphp

TransitionDefault

<x-splade-toggle>
    <button @click.prevent="toggle">Toggle</button>

    <div class="p-4 bg-red-500">
        <x-splade-transition animation="custom-demo" show="toggled">
            <div class="bg-green-500 p-4">Slot</div>
        </x-splade-transition>
    </div>
</x-splade-toggle>

@endsection