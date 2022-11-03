@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4" :default="$project">
        <x-splade-input dusk="name" name="name" label="Name" />
        <x-splade-input dusk="city" name="organization.address.city" label="City" />
    </x-splade-form>
</div>

@endsection