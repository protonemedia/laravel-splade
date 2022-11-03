@extends('layout')

@section('content')

    FormFilePond

<x-splade-form>
    <x-splade-file filepond name="avatar" multiple />
</x-splade-form>

@endsection