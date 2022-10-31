@extends('layout')

@section('content')

FormComponents

<x-splade-form :default="['country' => 'NL']">
    <x-splade-select dusk="select-regular" name="country" label="Country">
        <option value="BE">Belgium</option>
        <option value="NL">Netherlands</option>
        <option value="SW">Sweden</option>
    </x-splade-select>

    <x-splade-select dusk="select-choices" name="country" label="Country" choices>
        <option value="BE">Belgium</option>
        <option value="NL">Netherlands</option>
        <option value="SW">Sweden</option>
    </x-splade-select>
</x-splade-form>

@endsection