@extends('layout')

@section('content')

    FormFilePond

<x-splade-form class="space-y-4 break-all">
    {{-- <x-splade-file filepond name="avatar"  /> --}}
    <x-splade-file filepond name="avatar-direct" server />

    <x-splade-submit />

    <div>@{{ form.$all }}</div>

</x-splade-form>

@endsection