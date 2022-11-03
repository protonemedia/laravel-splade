@extends('layout')

@section('content')

<x-splade-modal>
    <p dusk="text">FormComponents</p>

    <x-splade-form :default="['country' => 'NL']">
        <x-splade-select dusk="select-regular" name="country" label="Country">
            <option value="BE">Belgium</option>
            <option value="NL">Netherlands</option>
            <option value="SW">Sweden</option>
        </x-splade-select>

        <x-splade-select dusk="select-choices" name="country" label="Country" :choices="['searchEnabled' => false]">
            <option value="BE">Belgium</option>
            <option value="NL">Netherlands</option>
            <option value="SW">Sweden</option>
        </x-splade-select>
    </x-splade-form>
</x-splade-modal>

@endsection