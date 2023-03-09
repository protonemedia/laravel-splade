@extends('layout')

@section('content')

Buttons

<div class="flex">
    <x-splade-button label="Default"></x-splade-button>
    <x-splade-button danger label="Delete"></x-splade-button>
    <x-splade-button secondary v-bind:spinner="true" label="Spinner"></x-splade-button>
</div>

@endsection