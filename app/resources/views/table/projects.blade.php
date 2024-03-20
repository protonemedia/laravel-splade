@extends('layout')

@section('content')
    <h1 class="py-4 text-3xl">Big header to test scroll options</h1>

    <x-splade-table :for="$projects" :pagination-scroll="request()->query('paginationScroll', 'top')" />
@endsection
