@extends('layout')

@section('content')

@php
    use Illuminate\Contracts\Support\Arrayable;

    $instance = new class implements Arrayable
    {
        public function toArray()
        {
            return ['name' => 'Splade'];
        }
    }
@endphp

FormArrayable

<x-splade-form :default="$instance">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection