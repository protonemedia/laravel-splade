@extends('layout')

@section('content')

    FormBuilder

    @foreach($forms as $form)
        <x-splade-component is="form" :for="$form">
            <div v-if="form.wasSuccessful">
                Results:
                <pre v-text="form.$response.result" />
            </div>
        </x-splade-component>
    @endforeach

@endsection
