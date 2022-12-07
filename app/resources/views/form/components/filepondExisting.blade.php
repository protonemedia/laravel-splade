@extends('layout')

@section('content')

FormFilePondExisting

<x-splade-form :action="request()->fullUrlWithQuery(['form' => 'avatar'])" dusk="avatar" :default="['avatar' => $avatar]">
    <x-splade-file filepond preview server name="avatar" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form :action="request()->fullUrlWithQuery(['form' => 'photos'])" dusk="photos" :default="['photos' => $photos]">
    <x-splade-file filepond multiple preview server name="photos[]" dusk="photos-file-input" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form :action="request()->fullUrlWithQuery(['form' => 'documents'])" dusk="documents" :default="['documents' => $documents]">
    <x-splade-file filepond multiple name="documents[]" dusk="documents-file-input" />
    <x-splade-submit />
</x-splade-form>

<x-splade-form :action="request()->fullUrlWithQuery(['form' => 'avatar'])" dusk="external">
    <x-splade-file filepond server name="avatar" />
    <x-splade-input name="external_url" label="External URL" />
    <button class="block" @click.prevent="form.$addFile('avatar', form.external_url)">Add from URL</button>
    <x-splade-submit />
</x-splade-form>

@endsection