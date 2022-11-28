@extends('layout')

@section('content')

FormValidateMessage

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4">
        <x-splade-input name="name" label="Name" />
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection