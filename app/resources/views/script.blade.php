@extends('layout')

@section('content')

ScriptComponent

<div id="hey">Hey</div>

<x-splade-script>
    document.querySelector('div#hey').innerText = 'Hello World!';
</x-splade-script>

@endsection