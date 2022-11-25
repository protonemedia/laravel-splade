@extends('layout')

@section('content')

FormFilePondValidation

<x-splade-form>
    <x-splade-file filepond name="accept" accept="image/*" />
    <x-splade-file filepond name="min-size" min-size="100KB" />
    <x-splade-file filepond name="max-size" max-size="1KB" />
    <x-splade-file filepond name="exact-dimension" width="150" height="150" />
    <x-splade-file filepond name="min-image" min-width="125" min-height="125" />
    <x-splade-file filepond name="max-image" max-width="175" max-height="175" />
    <x-splade-file filepond name="min-resolution" :min-resolution="125 * 125" />
    <x-splade-file filepond name="max-resolution" :max-resolution="175 * 175" />
</x-splade-form>

@endsection