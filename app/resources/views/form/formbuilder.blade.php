@extends('layout')

@section('content')

    FormBuilder

    @foreach($forms as $form)
        <x-splade-formbuilder :form="$form">
            <pre v-if="form.wasSuccessful" v-text="form.$all" />
        </x-splade-formbuilder>
    @endforeach

@endsection
