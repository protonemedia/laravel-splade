@extends('layout')

@section('content')

<x-splade-form :default="['photos' => $photos]" class="space-y-4" style="word-break: break-all;">
    <h1 class="text-2xl">Photo manager</h1>
    <x-splade-file filepond preview server multiple name="photos" />
    <x-splade-submit />
</x-splade-form>

@endsection