@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :action="route('form.components.submit')" class="space-y-4">
        <x-splade-select name="country1" :options="$countries" placeholder="Select your country" choices="{ itemSelectText: 'Please select!' }" />
        <x-splade-select name="country2" :options="$countries" placeholder="Select your country" :choices="['itemSelectText' => 'Please select!']" />

        <x-splade-input placeholder="Date" name="date1" :date="['showMonths' => 2]" />
        <x-splade-input placeholder="Date" name="date2" date="{ showMonths: 2 }" />

        <x-splade-input placeholder="Time" name="time1" :time="['defaultHour' => 20]" />
        <x-splade-input placeholder="Time" name="time2" time="{ defaultHour: 20 }" />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection