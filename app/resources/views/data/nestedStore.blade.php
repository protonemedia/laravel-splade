@extends('layout')

@section('content')

DataGlobal1

<x-splade-data store="company" default="{ name: 'Apple' }" />

<x-splade-rehydrate on="refresh">
    <form class="space-y-4">
        <fieldset dusk="company">
            <label dusk="time">Company {{ now() }}</label>
            <p v-html="company.name"></p>
            <input v-model="company.name" dusk="name" />
        </fieldset>
    </form>
</x-splade-rehydrate>

<button @click.prevent="$splade.emit('refresh')">Refresh</button>

@endsection