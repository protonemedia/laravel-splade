@extends('layout')

@section('content')

FormFilePondValidation

<x-splade-form :default="['photos' => $photos]">
    <h1 class="text-2xl">Photo manager</h1>
    <x-splade-file filepond preview server multiple name="photos" />
    <x-splade-submit />
</x-splade-form>

@endsection