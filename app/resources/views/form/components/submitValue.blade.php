@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form class="space-y-4">
        <x-splade-submit name="approve" value="0" label="No" />
        <x-splade-submit name="approve" value="1" label="Yes" />
    </x-splade-form>
</div>

@endsection