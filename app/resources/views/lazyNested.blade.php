@extends('layout')

@section('content')

LazyNested

<x-splade-data store="company" default="{ name: 'Apple' }" />

<x-splade-data default="{ name: 'John' }">
    <x-splade-lazy passthrough="data">
        <x-slot:placeholder>
            Placeholder
        </x-slot:placeholder>

        <form class="space-y-4">
            Lazy

            <fieldset dusk="company">
                <label>Company</label>
                <p v-html="company.name"></p>
                <input v-model="company.name" />
            </fieldset>

            <fieldset dusk="user">
                <label>User</label>
                <p v-html="data.name"></p>
                <input v-model="data.name" />
            </fieldset>
        </form>
    </x-splade-lazy>
</x-splade-data>

@endsection