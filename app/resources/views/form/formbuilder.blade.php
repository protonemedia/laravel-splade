@extends('layout')

@section('content')

    FormBuilder

    @foreach($forms as $form)
        <x-splade-formbuilder :for="$form">
            <div v-if="form.wasSuccessful">
                Results:
                <pre v-text="form.$all" />
            </div>
        </x-splade-formbuilder>
    @endforeach

@endsection
