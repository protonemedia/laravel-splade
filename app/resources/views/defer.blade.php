@extends('layout')

@section('content')

ComponentDefer

<x-data default="{ counter: 1 }">
    <button @click="data.counter++">Increase</button>
    <x-defer url="/defer/api" v-bind:request="data" poll="5000" method="POST" />
</x-data>

@endsection