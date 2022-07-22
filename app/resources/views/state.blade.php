@extends('layout')

@section('content')

StateComponent

<x-splade-form>
    <button type="submit">Submit</button>
</x-splade-form>

<x-splade-state>
    <p v-if="state.hasError('name')" v-text="state.errors.name" />
    <p v-if="state.hasFlash('message')" v-text="state.flash.message" />
    <p v-if="state.hasShared('info')" v-text="state.shared.info" />
</x-splade-state>

@endsection