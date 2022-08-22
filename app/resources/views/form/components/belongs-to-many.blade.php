@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :default="$user" class="space-y-4">
        <x-splade-select
            name="tags[]"
            multiple
            relation
            :options="$tagOptions"
        />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection