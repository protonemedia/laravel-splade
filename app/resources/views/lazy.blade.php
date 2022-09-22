@extends('layout')

@section('content')

LazyComponent

<h1>{{ $always }}</h1>
<h2>{{ $first }}</h2>

<x-splade-lazy>
    @lazy
        <h3>1{{ $lazy['key'] }}</h3>
    @endlazy
</x-splade-lazy>

<x-splade-lazy>
    @lazy
        <h3>2{{ $lazy['key'] }}</h3>
    @endlazy
</x-splade-lazy>

@endsection