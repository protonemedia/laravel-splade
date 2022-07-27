@extends('layout')

@section('content')

ComponentDeferRequestAttribute

<x-splade-defer url="/defer/api" request="{ api: 'one' }" method="post">
    <p v-if="processing">Loading...</p>
    <p v-text="response" />
</x-splade-defer>

@endsection