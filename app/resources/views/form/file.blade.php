@extends('layout')

@section('content')

FormFile

<x-splade-form>
    <input type="file" dusk="avatar" @input="form.avatar = $event.target.files[0]" />
    <p v-text="form.errors.avatar" />
    <button type="submit">Submit</button>
</x-splade-form>

@endsection