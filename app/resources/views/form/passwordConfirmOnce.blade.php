@extends('layout')

@section('content')

FormPasswordConfirmOnce

<x-splade-form
    confirm
    require-password-once
    :action="route('form.simple.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection