@extends('layout')

@section('content')

FormEmit

<div class="space-y-4">
    <p>Static: <span id="static" dusk="static">{{ now() }}</span></p>

    <x-splade-rehydrate on="form-submitted">
        <x-slot:placeholder> <p> Reloading... </p> </x-slot:placeholder>

        <p>Dynamic: <span dusk="dynamic">{{ Str::random() }}</span></p>
    </x-splade-rehydrate>

    <x-splade-form action="/form/simple" @success="$splade.emit('form-submitted')" stay class="space-y-4">
        <x-splade-input autocomplete="off" name="name" />
        <x-splade-submit />
    </x-splade-form>

    <x-splade-script>
        $splade.on('form-submitted', () => document.querySelector('#static').classList.add('bg-confetti'))
    </x-splade-script>
</div>

@endsection