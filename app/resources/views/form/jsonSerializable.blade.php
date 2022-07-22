@extends('layout')

@section('content')

@php
    $instance = new class implements \JsonSerializable
    {
        public function jsonSerialize(): array
        {
            return ['name' => 'Splade'];
        }
    }
@endphp

FormJsonSerializable

<x-splade-form :default="$instance">
    <input v-model="form.name" dusk="name" />
</x-splade-form>

@endsection