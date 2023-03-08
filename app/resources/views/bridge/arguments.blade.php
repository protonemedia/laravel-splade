@extends('layout')

@section('content')

BridgeArguments

<x-repeater>
    <ul>
        <li v-for="(project, index) in props.projects">
            <span>@{{ index }}</span>
            <input
                v-model="props.projects[index].name"
                :placeholder="`Project ${index}`"
                :name="`name-${index}`"
                :dusk="`project-${index}`"
            />
        </li>
    </ul>

    <button @click="add(3)">Add three projects</button>

    <button @click="save(false)">Save without redirect</button>

    <button @click="save(true)">Save with redirect</button>
</x-repeater>


@endsection