@extends('layout')

@section('content')

FormReadImage

<x-splade-form>
    <x-splade-file name="photo" :show-filenames="false" dusk="avatar" />

    <img
        v-if="form.photo"
        class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
        :src="form.$fileAsUrl('photo')"
    />
</x-splade-form>

@endsection