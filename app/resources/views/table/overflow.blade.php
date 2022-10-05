@extends('layout')

@section('content')

<x-splade-table :for="$users">
    @cell('actions')
        <x-splade-button-with-dropdown teleport>
            <x-slot:button> <span dusk="row-button"> Button </span> </x-slot:button>

            <div class="bg-red-500 h-64 w-64 border-green-500 border-2 flex items-center justify-center">
                <button dusk="hey">Hey!</button>
            </div>
        </x-splade-button-with-dropdown>
    @endcell
</x-splade-table>

@endsection