@extends('layout')

@section('content')

FormSubmitOnChange

<x-splade-form dusk="form-all" action="/form/twoFields" submit-on-change>
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />

    <input v-model="form.email" dusk="email" />
    <p v-text="form.errors.email" />
</x-splade-form>

<x-splade-form dusk="form-single" action="/form/twoFields" submit-on-change="name">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />

    <input v-model="form.email" dusk="email" />
    <p v-text="form.errors.email" />
</x-splade-form>

<x-splade-form dusk="form-string" action="/form/twoFields" submit-on-change="name, email">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />

    <input v-model="form.email" dusk="email" />
    <p v-text="form.errors.email" />
</x-splade-form>

<x-splade-form dusk="form-array" action="/form/twoFields" :submit-on-change="['name', 'email']">
    <input v-model="form.name" dusk="name" />
    <p v-text="form.errors.name" />

    <input v-model="form.email" dusk="email" />
    <p v-text="form.errors.email" />
</x-splade-form>

@endsection