@extends('layout')

@section('content')

<x-splade-table :for="$users" striped>
    @cell('actions', $user)
        <a class="font-medium text-indigo-600" href="/users/{{ $user->id }}/edit"> Edit </a>
    @endcell
</x-splade-table>

<Link href="/navigation/one">Navigation One</Link>

@endsection