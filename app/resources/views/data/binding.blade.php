@extends('layout')

@section('content')

DataBinding

<x-splade-data>
    <input v-model="data.name" name="name" />
    <p dusk="text" v-text="data.name" />
</x-splade-data>

<Link dusk="remember" href="/data/remember">Remember</Link>

@endsection