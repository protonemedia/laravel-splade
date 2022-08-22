@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4" :default="$dummy" unguarded>
        <x-splade-input name="input" />
        <x-splade-input name="json[key]" />

        <x-splade-textarea name="textarea" />
        <x-splade-select name="select" :options="['a' => 'a', 'b' => 'b']" />
        <x-splade-checkbox name="checkbox" />

        <x-splade-radio name="radio" value="a" label="Radio A" />
        <x-splade-radio name="radio" value="b" label="Radio B" />

        <div dusk="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection