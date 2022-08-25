@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        class="space-y-4"
        :action="route('form.components.submit')"
        :default="['options' => [], 'files' => [], 'secret' => 'token']"
    >
        <x-splade-input name="name" label="Name" />

        <x-splade-input name="password" label="Password" type="password" />
        <x-splade-input name="secret" type="hidden" />

        <x-splade-file label="One file" name="file" />
        <x-splade-file label="Multiple files" name="files[]" multiple />

        <x-splade-input name="date" label="Date" type="date" pattern="\d{4}-\d{2}-\d{2}" />
        <x-splade-input name="time" label="Time" type="time" />

        <x-splade-textarea name="biography" label="Bio"  />

        <x-splade-group name="options" inline>
            <x-splade-checkbox name="options[]" value="1" label="Option 1" />
            <x-splade-checkbox name="options[]" value="2" label="Option 2" />
            <x-splade-checkbox name="options[]" value="3" label="Option 3" />
        </x-splade-group>

        <x-splade-group name="language" label="Language">
            <x-splade-radio name="language" value="nl">Dutch</x-splade-radio>
            <x-splade-radio name="language" value="en">English</x-splade-radio>
        </x-splade-group>

        <x-splade-select name="country" :options="$countries" label="Select your country" />
        <p class="mb-4" v-if="form.country">Selected country: <span v-text="form.country"></span></p>

        <x-splade-checkbox name="terms" label="Agree with terms" class="mt-4" />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection