@extends('layout')

@section('content')

FormConfirmDanger

<x-splade-form confirm-danger :action="route('form.simple.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection