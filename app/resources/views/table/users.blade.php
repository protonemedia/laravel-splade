@extends('layout')

@section('content')

<x-splade-table :for="$users">
    @cell('actions', $user)
        <a class="font-medium text-indigo-600" href="/users/{{ $user->id }}/edit"> Edit </a>
    @endcell
</x-splade-table>

@endsection