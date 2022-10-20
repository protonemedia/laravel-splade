@extends('layout')

@section('content')

FormCheckbox

<div class="max-w-sm mx-auto px-4">
    <x-splade-form
        :default="[
            'check_0' => 0,
            'check_1' => 1,
            'check_false' => false,
            'check_true' => true,

            'check_0_diff_false' => 'no',
            'check_1_diff_false' => 1,
            'check_false_diff_false' => 'no',
            'check_true_diff_false' => true,
        ]"
    >
        <x-splade-checkbox value="1" name="check_0" label="Checkbox 0" />
        <x-splade-checkbox value="1" name="check_1" label="Checkbox 1" />
        <x-splade-checkbox name="check_false" label="Checkbox False" />
        <x-splade-checkbox name="check_true" label="Checkbox True" />

        <x-splade-checkbox false-value="no" value="1" name="check_0_diff_false" label="Checkbox 0" />
        <x-splade-checkbox false-value="no" value="1" name="check_1_diff_false" label="Checkbox 1" />
        <x-splade-checkbox false-value="no" name="check_false_diff_false" label="Checkbox False" />
        <x-splade-checkbox false-value="no" name="check_true_diff_false" label="Checkbox True" />

        <div dusk="all">@{{ form.$all }}</div>
    </x-splade-form>
</div>

@endsection