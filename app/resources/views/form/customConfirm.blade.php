@extends('layout')

@section('content')

FormCustomConfirm

<x-splade-form
    confirm="Custom title"
    confirm-text="Custom text"
    confirm-button="Yes"
    cancel-button="No"
    :action="route('form.simple.submit')">
    <input v-model="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection