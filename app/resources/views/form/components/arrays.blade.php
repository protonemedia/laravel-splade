@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        class="space-y-4"
        :default="[
            'options' => [],
            'nested' => ['key' => 'value', 'another' => 'key'],
            'list' => [1 => 'one', 2 => 'two', 3 => 'three'],
            'another' => [1 => 'one', 2 => 'two', 3 => 'three']
        ]"
    >
        <x-splade-group name="options" inline>
            <x-splade-checkbox name="options[]" value="1" label="Option 1" />
            <x-splade-checkbox name="options[]" value="2" label="Option 2" />
            <x-splade-checkbox name="options[]" value="3" label="Option 3" />
        </x-splade-group>

        <x-splade-input name="nested.key" />
        <x-splade-input name="nested[another]" />

        <x-splade-input name="list[1]" />
        <x-splade-input name="list[2]" />
        <x-splade-input name="list[3]" />

        <x-splade-input name="another.1" />
        <x-splade-input name="another.2" />
        <x-splade-input name="another.3" />

        <x-splade-submit />

        <div id="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection