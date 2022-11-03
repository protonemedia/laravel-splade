@extends('layout')

@section('content')

    FormFilePond

<x-splade-form>
    {{-- <x-splade-file filepond name="avatar"  /> --}}
    <x-splade-file filepond name="avatar-direct" server />

    <div>@{{ form.$all }}</div>
</x-splade-form>

@endsection