@extends('layout')

@section('content')

DataEloquent

<x-splade-data :default="new \App\Models\User(['name' => 'Pascal'])">
    <input v-model="data.name" name="name" />
</x-splade-data>

@endsection