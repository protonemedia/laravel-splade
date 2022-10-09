@extends('layout')

@section('content')

<x-splade-table :for="$organizations" />

@endsection