@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form id="form1" :default="$firstUser" class="space-y-4">
        <x-splade-input name="name" />
        <x-splade-select name="tags[]" multiple relation :options="$tagOptions" />
        <div id="all1">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form id="form2" :default="$secondUser" class="space-y-4">
        <x-splade-input name="email" />
        <x-splade-select name="tags[]" multiple relation :options="$tagOptions" />
        <div id="all2">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection