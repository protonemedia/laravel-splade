@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        class="space-y-4"
        :action="route('form.components.submit')"
        :default="$defaults"
    >
        <x-splade-textarea name="biography" placeholder="Your Bio" autosize />

        <x-splade-select name="country" :options="$countries" placeholder="Select your country" choices />
        <p class="mb-4" v-if="form.country">Selected country: <span v-text="form.country"></span></p>

        <x-splade-select name="countries[]" :options="$countries" placeholder="Select your countries" multiple choices />
        <p class="mb-4" v-if="form.countries.length">Selected countries: <span v-text="form.countries.join(', ')"></span></p>

        <x-splade-input placeholder="Date" name="date" date />
        <x-splade-input placeholder="Time" name="time" time />
        <x-splade-input placeholder="Datetime" name="datetime" date time />
        <x-splade-input placeholder="Date Range" name="daterange" date range />

        <x-splade-submit />

        <button @click.prevent="
            form.biography = 'Changed!';
            form.country = 'BE';
            form.countries = ['DE', 'IT'];
            form.date = '2022-08-22';
            form.time = '3:14';
            form.datetime = '2022-08-22 3:14';
            form.daterange = '2022-08-22 to 2022-09-22';
        ">Change!</button>
    </x-splade-form>
</div>

@endsection