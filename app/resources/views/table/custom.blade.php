@extends('layout')

@section('content')

<x-splade-table :for="$users">
    <x-slot name="head">
        <thead>
            <tr>
                <th>Email</th>
                <th>Name</th>
            </tr>
        </thead>
    </x-slot>

    <x-slot name="body">
        <tbody>
            @foreach($users->resource as $user)
                <tr>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->name }}</td>
                </tr>
            @endforeach
        </tbody>
    </x-slot>
</x-splade-table>

@endsection