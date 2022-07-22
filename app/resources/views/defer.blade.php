@extends('layout')

@section('content')

ComponentDefer

<x-splade-data scope="requestData" v-bind:default="{ api: 'one' }">
    <x-splade-defer url="/defer/api" v-bind:request="requestData" method="post">
        <p v-if="processing">Loading...</p>
        <p v-text="response" />
        <button dusk="reload" @click.prevent="() => { requestData.api = 'two'; reload(); }">Again!</button>
    </x-splade-defer>
</x-splade-data>

@endsection