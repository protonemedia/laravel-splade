@extends('layout')

@section('content')

FormDownload

<x-splade-form class="form-simple" blob>
    <x-splade-input name="name" />
    <button type="submit">Download</button>
</x-splade-form>

@endsection