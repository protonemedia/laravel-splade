@extends('layout')

@section('content')

<x-splade-table :for="$projects" />

@endsection