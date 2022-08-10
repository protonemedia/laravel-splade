@extends('layout')

@section('content')

TableUsers

<x-splade-table :for="$users">
    {{-- {{ Str::reverse($item->email) }} --}}
</x-splade-table>

@endsection