@extends('layout')

@section('content')

FormComponents

@php $countries = app('countries.keyValue') @endphp

<div class="max-w-xl mx-auto px-4">
    <x-splade-form class="space-y-4">
        <x-splade-select dusk="regular-no-placeholder" label="Regular No Placeholder" name="regularNoPlaceholder" :options="app('countries')" option-label="name" option-value="alpha-2" />
        <x-splade-select multiple dusk="multiple-regular-no-placeholder" label="Multiple Regular No Placeholder" name="multipleRegularNoPlaceholder[]" :options="$countries" />
        <x-splade-select dusk="regular-with-placeholder" label="Regular With Placeholder" name="regularWithPlaceholder" :options="$countries" placeholder="Country" />
        <x-splade-select multiple dusk="multiple-regular-with-placeholder" label="Multiple Regular With Placeholder" name="multipleRegularWithPlaceholder[]" :options="$countries" placeholder="Country" />

        <x-splade-select dusk="choices-no-placeholder" label="Choices No Placeholder" name="choicesNoPlaceholder" :options="$countries" choices />
        <x-splade-select multiple dusk="multiple-choices-no-placeholder" label="Multiple Choices No Placeholder" name="multipleChoicesNoPlaceholder[]" :options="$countries" choices />

        <div class="flex">
            <div class="w-1/2">
                <x-splade-select dusk="choices-with-placeholder" label="Choices With Placeholder" name="choicesWithPlaceholder" :options="$countries" placeholder="Country" choices />
            </div>

            <div class="w-1/2">
                <x-splade-select multiple dusk="multiple-choices-with-placeholder" label="Multiple Choices With Placeholder" name="multipleChoicesWithPlaceholder[]" :options="$countries" placeholder="Country" choices />
            </div>
        </div>

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection