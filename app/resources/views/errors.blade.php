@extends('layout')

@section('content')

ErrorsComponent

<x-splade-form action="/form/simple">
    <input name="form.name" dusk="name" />
    <button type="submit">Submit</button>
</x-splade-form>

<x-splade-errors>
    <p v-if="errors.has('name')" v-text="errors.first('name')" />
    <p v-if="errors.has('company')" v-text="errors.first('company')" />
</x-splade-errors>

@endsection