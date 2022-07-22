@extends('layout')

@section('content')

FormConfirm

<x-splade-form confirm :action="route('form.simple.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection