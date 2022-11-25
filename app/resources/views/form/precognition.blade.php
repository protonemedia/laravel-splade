@extends('layout')

@section('content')

FormPrecognition

<x-splade-form precognition="email">
    <x-splade-input name="name" label="Name" />
    <x-splade-input name="email" label="Email" />
    <x-splade-submit />
</x-splade-form>

@endsection