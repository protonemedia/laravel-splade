@extends('layout')

@section('content')

FormNested

<x-splade-form :default="json_encode(['nested' => ['name' => 'Splade']])">
    <input v-model="form.nested.name" dusk="name" />
    <input type="checkbox" v-model="form.nested.accepted" dusk="accepted" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection