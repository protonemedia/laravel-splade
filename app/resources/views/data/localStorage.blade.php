@extends('layout')

@section('content')

DataRemember

<x-splade-data remember="remember" local-storage>
    <input v-model="data.checked" type="checkbox" name="checkbox" />
</x-splade-data>

@endsection