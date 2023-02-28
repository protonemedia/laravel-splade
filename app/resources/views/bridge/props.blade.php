@extends('layout')

@section('content')

<x-fake-email :user="\App\Models\User::first()">
    <p>User email: <span dusk="email" v-text="props.user.email" /></p>

    <input name="prefix" v-model="props.prefix" placeholder="Prefix..." />

    <button @click="randomize">Randomize</button>
</x-fake-email>

@endsection