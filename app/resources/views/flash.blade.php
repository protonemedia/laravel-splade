@extends('layout')

@section('content')

FlashComponent

<x-splade-flash>
    <p v-if="flash.has('message')" v-text="flash.message" />
</x-splade-flash>

@endsection