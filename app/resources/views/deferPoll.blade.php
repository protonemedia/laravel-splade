@extends('layout')

@section('content')

ComponentDefer

@php
    \Illuminate\Support\Facades\Cache::put('deferPoll', 0)
@endphp

<x-splade-defer url="/defer/poll"  method="post" poll="2000">
    <p v-if="processing">Loading...</p>
    <p dusk="response" v-text="response" />
    <button dusk="reload" @click.prevent="() => { requestData.api = 'two'; reload(); }">Again!</button>
</x-splade-defer>

@endsection