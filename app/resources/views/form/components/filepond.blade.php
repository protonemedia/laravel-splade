@extends('layout')

@section('content')

FormFilePond

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

@endsection