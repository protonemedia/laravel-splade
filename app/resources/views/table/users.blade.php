@extends('layout')

@section('content')

<x-splade-modal max-width="3xl">
    <x-splade-table :for="$users" as="$user">
        <x-splade-cell actions>
            <a href="/users/{{ $user->id }}/edit"> Edit </a>
        </x-splade-cell>
    </x-splade-table>
</x-splade-modal>

<Link href="/navigation/one">Navigation One</Link>

@endsection