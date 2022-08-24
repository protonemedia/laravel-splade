@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        class="space-y-4"
        default="{ name: 'Test' }"
    >
        <x-splade-input name="name" label="Name" />
        <x-splade-input name="email" label="Email" />

        <x-splade-input name="description.short" label="Short description" />
        <x-splade-input name="description.long" label="Long description" />

        <x-splade-checkbox name="agree" value="1" label="Agree" />

        <x-splade-group name="options" inline>
            <x-splade-checkbox name="options[]" value="1" label="Option 1" />
            <x-splade-checkbox name="options[]" value="2" label="Option 2" />
            <x-splade-checkbox name="options[]" value="3" label="Option 3" />
        </x-splade-group>

        <x-splade-group name="theme" inline>
            <x-splade-radio name="theme" value="dark" label="Dark" />
            <x-splade-radio name="theme" value="light" label="Light" />
        </x-splade-group>

        <x-splade-submit />

        <div id="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection