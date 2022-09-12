@extends('layout')

@section('content')

FormCheckboxes

<div class="max-w-md mx-auto px-4 flex space-x-12">
    <x-splade-form class="space-y-4" :default="['countries' => ['BE', 'NL']]">
        <x-splade-checkboxes name="countries[]" :options="$countries" label="Select one or more countries" />
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form class="space-y-4" :default="['country' => 'NL']">
        <x-splade-radios name="country" :options="$countries" label="Select a country" />
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection