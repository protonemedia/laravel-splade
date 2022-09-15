@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4" :action="route('form.components.submitOnChange')">
        <x-splade-select @change="form.submit" name="name" :options="['splade' => 'Splade']" placeholder="Select your country" choices />
    </x-splade-form>
</div>

@endsection