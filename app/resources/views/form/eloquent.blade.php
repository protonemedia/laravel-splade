@extends('layout')

@section('content')

FormEloquent

<x-splade-form :default="new \App\Models\User(['name' => 'Splade'])" unguarded>
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection