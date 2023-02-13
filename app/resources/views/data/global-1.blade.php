@extends('layout')

@section('content')

DataGlobal1

<x-splade-data store="company" default="{ name: 'Apple' }" />
<x-splade-data store="framework" remember :default="['name' => 'Laravel']" />
<x-splade-data store="project" remember local-storage default="{ name: 'Splade'}" />

<form class="space-y-4">
    <fieldset dusk="company">
        <label>Company</label>
        <p v-html="company.name"></p>
        <input v-model="company.name" />
    </fieldset>

    <fieldset dusk="framework">
        <label>Framework</label>
        <p v-html="framework.name"></p>
        <input v-model="framework.name" />
    </fieldset>

    <fieldset dusk="project">
        <label>Project</label>
        <p v-html="project.name"></p>
        <input v-model="project.name" />
    </fieldset>
</form>

<Link dusk="global-2" href="/data/global-2">Go to global-2</Link>

@endsection