@extends('layout')

@section('content')

FormFilePond

<x-splade-form dusk="regular-avatar" :action="route('form.components.filepond.storeSingle')" class="space-y-4">
    <x-splade-file filepond name="avatar" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="regular-avatars" :action="route('form.components.filepond.storeMultiple')" class="space-y-4">
    <x-splade-file filepond name="avatars" multiple />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="single-avatar" :action="route('form.components.filepond.storeSingle')" class="space-y-4">
    <x-splade-file filepond name="avatar" server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="multiple-avatars" :action="route('form.components.filepond.storeMultiple')" class="space-y-4">
    <x-splade-file filepond name="avatars" multiple server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="route-middleware" :action="route('form.components.filepond.storeWithRouteMiddleware')" class="space-y-4">
    <x-splade-file filepond name="avatar" server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="form-request" :action="route('form.components.filepond.storeWithFormRequest')" class="space-y-4">
    <x-splade-file filepond name="avatar" server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="form-request-rule-object" :action="route('form.components.filepond.storeWithFormRequestRuleObject')" class="space-y-4">
    <x-splade-file filepond name="avatar" server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="form-request-rule-object-with-title" :action="route('form.components.filepond.storeWithFormRequestRuleObjectWithTitle', \App\Models\Project::first())" class="space-y-4">
    <x-splade-input name="title" label="Title" />
    <x-splade-file filepond name="avatar" server />
    <x-splade-submit />
</x-splade-form>

<x-splade-form dusk="js-config">
    <x-splade-file filepond="{ credits: null }" name="file" />
</x-splade-form>

<x-splade-form dusk="php-config">
    <x-splade-file :filepond="['credits' => null]" name="file" />
</x-splade-form>

@endsection