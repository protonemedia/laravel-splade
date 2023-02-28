@extends('layout')

@section('content')

<x-fake-mail :user="\App\Models\User::first()">
    <x-slot:title>
        <h1>Custom Title</h1>
    </x-slot:title>
</x-fake-mail>

@endsection