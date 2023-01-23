@extends('layout')

@section('content')

FormPasswordConfirm

<x-splade-form
    confirm
    require-password
    :action="route('form.simple.submit', ['password' => 1])">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection