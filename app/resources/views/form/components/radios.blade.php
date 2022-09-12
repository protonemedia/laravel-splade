@extends('layout')

@section('content')

FormRadios

<div class="max-w-md mx-auto px-4 flex space-x-12">
    <x-splade-form class="space-y-4" :default="['country' => 'NL']">
        <x-splade-radios name="country" :options="$countries" label="Select a country" />
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection