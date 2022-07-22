@extends('layout')

@section('content')

@php
    use Illuminate\Contracts\Support\Jsonable;

    $instance = new class implements Jsonable
    {
        public function toJson($options = 0)
        {
            return json_encode(['name' => 'Splade'], $options);
        }
    }
@endphp

FormJsonable

<x-splade-form :default="$instance">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection