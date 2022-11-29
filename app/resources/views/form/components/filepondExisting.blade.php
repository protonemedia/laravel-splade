@extends('layout')

@section('content')

FormFilePondValidation

<x-splade-form>
    <x-splade-file filepond preview name="existing-upload" :files="$upload" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form>
    <x-splade-file filepond preview name="existing-uploads[]" multiple :files="$uploads" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form>
    <x-splade-file filepond preview name="add-remote" />
    <button @click.prevent="form.$addFile('add-remote', @js(url('1.jpeg')))">Add!</button>
    <x-splade-submit />
</x-splade-form>

@endsection