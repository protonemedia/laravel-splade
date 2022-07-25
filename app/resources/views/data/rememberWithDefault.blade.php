@extends('layout')

@section('content')

DataRememberWithDefault

<x-splade-data remember="rememberWithDefault" default="{ checked: true }">
    <input v-model="data.checked" type="checkbox" name="checkbox" />
</x-splade-data>

<Link dusk="binding" href="/data/binding">Binding</Link>

@endsection