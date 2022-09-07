@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :default="$user" class="space-y-4">
        @foreach($keywordOptions as $value => $label)
            <x-splade-checkbox name="keywords[]" :label="$label" :value="$value" relation />
        @endforeach
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection