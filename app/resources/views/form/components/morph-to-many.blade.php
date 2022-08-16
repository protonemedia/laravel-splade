@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form :default="$user">

        <x-splade-select
            name="keywords[]"
            multiple
            relation
            :options="$keywordOptions"
        />

        <x-splade-submit />
    </x-splade-form>
</div>

@endsection