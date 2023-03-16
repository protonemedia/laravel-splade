@extends('layout')

@section('content')

FormComponents

<div class="max-w-sm mx-auto px-4">
    <x-splade-form dusk="select-regular" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4">
        <x-splade-select label="Country" dusk="country" name="country" :options="app('countries.keyValue')" />
        <x-splade-select label="Region" dusk="province" name="province" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form dusk="select-choices" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4">
        <x-splade-select label="Country" choices dusk="country" name="country" :options="app('countries.keyValue')" />
        <x-splade-select label="Region" choices dusk="province" name="province" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form dusk="select-multiple-regular" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4">
        <x-splade-select dusk="country" name="country" :options="app('countries.keyValue')" />
        <x-splade-select multiple dusk="provinces" name="provinces[]" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form dusk="select-multiple-choices" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4">
        <x-splade-select choices dusk="country" name="country" placeholder="country" :options="app('countries.keyValue')" />
        <x-splade-select multiple choices dusk="provinces" name="provinces[]" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form dusk="select-first" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4" >
        <x-splade-select label="Country" dusk="country" name="country" :options="app('countries.keyValue')" />
        <x-splade-select label="Region" dusk="province" name="province" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" select-first-remote-option />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>

    <x-splade-form dusk="select-reset" :default="['country' => 'BE']" :action="route('form.components.selectAsync')" class="space-y-4" >
        <x-splade-select label="Country" dusk="country" name="country" :options="app('countries.keyValue')" />
        <x-splade-select label="Region" dusk="province" name="province" placeholder="Pick a region" remote-url="`/api/provinces/${form.country}?nested=1`" remote-root="data.nested" reset-on-new-remote-url />
        <div dusk="all">@{{ form.$all }}</div>
        <x-splade-submit />
    </x-splade-form>
</div>

@endsection