@extends('layout')

@section('content')

<x-splade-table :for="$projects">
    <x-splade-cell action>
        <x-splade-form preserve-scroll :default="$item" >
            <x-splade-input type="hidden" name="id" />
            <x-splade-submit />
        </x-splade-form>

        <x-splade-link preserve-scroll :data="['id' => $item->id]" method="post" href="{{ request()->fullUrl() }}">Submit with Link</x-splade-link>
    </x-splade-cell>
</x-splade-table>

@endsection