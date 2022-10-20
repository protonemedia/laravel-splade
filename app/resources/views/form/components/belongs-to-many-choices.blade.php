@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :action="route('form.relations.storeBelongsToMany')" :default="$user" class="space-y-4">
        <x-splade-select
            dusk="123"
            name="tags[]"
            multiple
            relation
            choices
            :options="$tagOptions"
        />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection