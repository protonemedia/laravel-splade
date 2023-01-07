@extends('layout')

@section('content')

<div id="hey">Hey</div>

<x-splade-script>
    jQuery('div#hey').html('Hello World!');

    console.log(this.$splade);
</x-splade-scipt>

@endsection