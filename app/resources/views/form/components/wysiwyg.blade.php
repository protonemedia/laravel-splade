@extends('layout')

@section('content')

FormWYSIWYG

<div class="mx-auto px-4">
    <x-splade-form
        :default="[
            'body' => 'This is a <u>test</u> with the <b>Splade</b> <em>Jodit WYSIWYG editor</em>.'
        ]"
    >
        <x-splade-wysiwyg name="body" placeholder="Body" />

        <div dusk="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection
