@extends('layout')

@section('content')

BridgeMethod

<x-new-project class="bg-blue-100 p-4 space-x-3">
    <input name="name" v-model="props.project.name" placeholder="Project name..." />
    <span dusk="counter" v-text="props.counter"/>
    <button @click="increment">Increment</button>
</x-new-project>

@endsection