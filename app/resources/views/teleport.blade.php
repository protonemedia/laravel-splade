@extends('layout')

@section('content')

TeleportComponent

<x-splade-form>
    <input dusk="name" v-model="form.name" />

    <x-splade-teleport to="#footer">
        <p v-text="form.name" />
    </x-splade-teleport>
</x-splade-form>

<div id="footer" class="p-4 bg-green-500 text-white" />

@endsection