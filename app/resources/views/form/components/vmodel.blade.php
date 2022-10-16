@extends('layout')

@section('content')

FormVueModel

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        class="space-y-4"
        :action="route('form.components.submit')"
        :default="['options' => [], 'files' => [], 'secret' => 'token']"
    >
        <x-splade-input v-model="form.name" dusk="name" label="Name" />

        <x-splade-input v-model="form.password" dusk="password" label="Password" type="password" />
        <x-splade-input v-model="form.secret" dusk="secret" type="hidden" />

        <x-splade-file label="One file" v-model="form.file" dusk="file" />
        <x-splade-file label="Multiple files" v-model="form.files" dusk="files" multiple />

        <x-splade-input v-model="form.date" dusk="date" label="Date" type="date" pattern="\d{4}-\d{2}-\d{2}" />
        <x-splade-input v-model="form.time" dusk="time" label="Time" type="time" />

        <x-splade-textarea v-model="form.biography" dusk="biography" label="Bio"  />

        <x-splade-group inline>
            <x-splade-checkbox v-model="form.options" dusk="options" value="1" label="Option 1" />
            <x-splade-checkbox v-model="form.options" dusk="options" value="2" label="Option 2" />
            <x-splade-checkbox v-model="form.options" dusk="options" value="3" label="Option 3" />
        </x-splade-group>

        <x-splade-group label="Language">
            <x-splade-radio v-model="form.language" dusk="language" value="nl">Dutch</x-splade-radio>
            <x-splade-radio v-model="form.language" dusk="language" value="en">English</x-splade-radio>
        </x-splade-group>

        <x-splade-select v-model="form.country" dusk="country" :options="$countries" label="Select your country" />
        <p class="mb-4" v-if="form.country">Selected country: <span v-text="form.country"></span></p>

        <x-splade-checkbox v-model="form.terms" dusk="terms" label="Agree with terms" class="mt-4" />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection