@extends('layout')

@section('content')

TransitionDefault

<x-splade-toggle>
    <button @click.prevent="toggle">Toggle</button>

    <div class="p-4 bg-red-500">
        <x-splade-transition show="toggled">
            <div class="bg-green-500 p-4">Slot</div>
        </x-splade-transition>
    </div>
</x-splade-toggle>

@endsection