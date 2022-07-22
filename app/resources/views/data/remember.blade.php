@extends('layout')

@section('content')

DataRemember

<x-splade-data remember="remember">
    <input v-model="data.checked" type="checkbox" name="checkbox" />
</x-splade-data>

<Link dusk="binding" href="/data/binding">Binding</Link>

@endsection